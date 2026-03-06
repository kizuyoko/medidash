"use client";
import { useMemo } from "react";
import type { DisplayPatients } from "../../types/patient";

type Props = {
  patients: DisplayPatients;
}

const AlertsList = ({ patients } : Props) => {
  const alerts = useMemo(() => {
    const noAppointment = patients.filter(p => !p.nextAppointment).length;
    const elderly = patients.filter(p => p.age >= 80).length
    const critical = patients.filter(p => p.condition === "Critical").length

    return [
      { label: "patients without appointment", count: noAppointment },
      { label: "patients in critical condition", count: critical },
      { label: "patients older than 80", count: elderly },
      
    ]
  }, [patients])
  
  return alerts.length > 0 ? (
    <section className="card w-full my-2 py-2 border-red-400 rounded-lg bg-red-50 text-sm">
      <ul className="md:flex gap-6">
        {alerts.map(alert => 
          alert.count > 0 && (
            <li key={alert.label} className=" text-red-800">
              <span className="text-xl">⚠ {alert.count} </span> 
              {alert.label}
            </li>
          )
        )}
      </ul>
    </section>
  ) : null;
}; 

export default AlertsList;