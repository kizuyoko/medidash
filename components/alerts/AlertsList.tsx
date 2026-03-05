"use client";
import { useMemo } from "react";
import type { DisplayPatients } from "../../types/patient";
import Heading from "../ui/Heading";

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
      { label: "patients older than 80", count: elderly },
      { label: "patients in critical condition", count: critical },
    ]
  }, [patients])

  return alerts.length > 0 ? (
    <section className="my-4 lg:flex gap-4 border border-red-400 rounded-lg p-2 px-4 bg-red-50">
      <Heading level={3} className="text-red-700">Alert List</Heading>
      <ul className="mx-4 md:flex gap-6">
        {alerts.map(alert => 
          alert.count > 0 && (
            <li key={alert.label} className=" text-red-800 font-medium">
              <span className="text-xl">⚠ </span> {alert.count} {alert.label}
            </li>
          )
        )}
      </ul>
    </section>
  ) : null;
}; 

export default AlertsList;