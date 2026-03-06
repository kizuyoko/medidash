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

    patients.forEach(p => {
      stats[p.status] += 1;
    });

    return stats;
  }, [patients]);

  const statsItems = [
    { label: "Waiting", value: statusStats.waiting },
    { label: "In consult", value: statusStats.in_consult },
    { label: "Done", value: statusStats.done },
    { label: "Cancelled", value: statusStats.cancelled },
  ];

  return (
    <section className="w-full my-2 border border-slate-400 rounded-lg p-2 px-4 bg-slate-50 text-sm">
      <ul>
        <li className="md:flex gap-4"> Status
         {
          statsItems.map(item => (
            <p key={item.label}>{item.label}: {item.value} </p>
          ))
         }
        </li>
        <li>Gender: Male: 10 Female 9</li>
        <li>Blood type: Male: 10 Female 9</li>
      </ul>
    </section>
  );
};

export default StatsPanel;