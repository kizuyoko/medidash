"use client";
import { useMemo } from "react";
import type { DisplayPatients, PatientStatus } from "../../types/patient";

type Props = {
  patients: DisplayPatients;
}

type StatusStats = Record<PatientStatus, number>

const StatsPanel = ({ patients } : Props) => {
  const statusStats = useMemo(() => {
    const stats: StatusStats = {
      waiting: 0,
      in_consult: 0,
      done: 0,
      cancelled: 0,
    };
    const gender = {
      male: 0,
      female: 0,
      unknown: 0,
    };
    const blood = {
      'A+': 0, 'A-': 0, 'B+': 0, 'B-': 0, 'O+': 0, 'O-': 0, 'AB+': 0, 'AB-': 0,  Unknown: 0,
    };

    patients.forEach(p => {
      stats[p.status] ++;
      gender[p.gender]++;
      blood[p.bloodType]++;
    });

    return { stats, gender, blood};
  }, [patients]);

  const statsItems = [
    { label: "Waiting", value: statusStats.stats.waiting, color: "bg-yellow-400" },
    { label: "In consult", value: statusStats.stats.in_consult, color: "bg-purple-400"  },
    { label: "Done", value: statusStats.stats.done, color: "bg-green-400"  },
    { label: "Cancelled", value: statusStats.stats.cancelled, color: "bg-gray-400"  },
  ];

  const bloodTypes = ["A+","A-","B+","B-","O+","O-","AB+","AB-"];

  return (
    <section className="w-full my-2 border border-slate-400 rounded-lg p-2 px-4 bg-slate-50 text-sm">
      <ul className="flex flex-row md:flex-col gap-6 md:gap-2">
        <li className="md:flex gap-4"><span className="inline-block w-20">Status</span>
         {
          statsItems.map(item => (
            <p key={item.label}>
              <span className={`inline-block mr-2 w-3 h-3 rounded-full ${item.color}`}></span>
              {item.label}: {item.value} 
            </p>
          ))
         }
        </li>
        <li className="md:flex gap-4">
          <span className="inline-block w-20">Gender</span>
          <p>Male: {statusStats.gender.male}</p>
          <p>Female: {statusStats.gender.female}</p>
          <p>Unknown: {statusStats.gender.unknown}</p>
        </li>
        <li className="md:flex gap-4">
          <span className="inline-block w-20">Blood Type</span>
          {bloodTypes.map(type => (
            <p key={type}>
              {type}: {statusStats.blood[type as keyof typeof statusStats.blood]}
            </p>
          ))}
        </li>
      </ul>
    </section>
  );
};

export default StatsPanel;