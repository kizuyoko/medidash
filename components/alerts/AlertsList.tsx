import type { DisplayPatients } from "../../types/patient";
import Heading from "../ui/Heading";

type Props = {
  patients: DisplayPatients;
}

const AlertsList = ({ patients } : Props) => {
  const alerts = patients.filter(p =>
    p.condition.toLowerCase() === "critical" || !p.medications
  );

  return (
    <section>
      <Heading level={3}>Alert List</Heading>
      <ul>
        {alerts.map(p => <li key={p.id}>{p.fullName} – {p.condition}</li>)}
      </ul>
    </section>
  );
}; 

export default AlertsList;