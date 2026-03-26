"use client";
import type { PatientStatus } from "../../types/patient";

type Props = {
  stats: {
    statusStats: Record<PatientStatus, number>;
    genderStats: Record<'male' | 'female' | 'unknown', number>;
    bloodStats: Record<string, number>;
  } 
}

const StatsPanel = ({ stats } : Props) => {
  const { statusStats, genderStats, bloodStats } = stats;

  const statsItems = [
    { label: "Waiting", value: statusStats.waiting, color: "bg-yellow-400" },
    { label: "In consult", value: statusStats.in_consult, color: "bg-purple-400"  },
    { label: "Done", value: statusStats.done, color: "bg-green-400"  },
    { label: "Cancelled", value: statusStats.cancelled, color: "bg-gray-400"  },
  ];

  const bloodTypes = ["A+","A-","B+","B-","O+","O-","AB+","AB-"];

  return (
    <section className="w-full my-2 border border-slate-400 rounded-lg p-2 px-4 bg-(--color-bg-stats) text-sm">
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
            <li>Male: {genderStats.male}</li>
            <li>Female: {genderStats.female}</li>
            <li>Unknown: {genderStats.unknown}</li>
          </ul>
        </li>
        <li className="lg:flex gap-4">
          <span className="inline-block w-20">Blood Type</span>
          <ul className="flex gap-4 flex-wrap">
          {bloodTypes.map(type => (
            <li key={type}>
              {type}: {bloodStats[type as keyof typeof bloodStats]}
            </li>
          ))}</ul>
        </li>
      </ul>
    </section>
  );
};

export default StatsPanel;