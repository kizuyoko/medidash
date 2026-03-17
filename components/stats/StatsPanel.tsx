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
      <ul className="flex lg:flex-col gap-4 lg:gap-2 flex-wrap">
        <li className="lg:flex gap-4"><span className="inline-block w-20">Status</span>
          <ul className="lg:flex gap-4">
         {
          statsItems.map(item => (
            <li key={item.label}>
              <span className={`inline-block mr-2 w-3 h-3 rounded-full ${item.color}`}></span>
              {item.label}: {item.value} 
            </li>
          ))
         }</ul>
        </li>
        <li className="lg:flex gap-4">
          <span className="inline-block w-20">Gender</span>
          <ul className="lg:flex gap-4">
            <li>Male: {statusStats.gender.male}</li>
            <li>Female: {statusStats.gender.female}</li>
            <li>Unknown: {statusStats.gender.unknown}</li>
          </ul>
        </li>
        <li className="lg:flex gap-4">
          <span className="inline-block w-20">Blood Type</span>
          <ul className="flex gap-1 flex-wrap">
          {bloodTypes.map(type => (
            <li key={type}>
              {type}: {statusStats.blood[type as keyof typeof statusStats.blood]}
            </li>
          ))}</ul>
        </li>
      </ul>
    </section>
  );
};

export default StatsPanel;