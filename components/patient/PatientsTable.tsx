import PatientsTableBody from "./PatientsTableBody";
import PatientsTableHead from "./PatientsTableHead";
import type { Patients } from "../../types/patient";

const PatientsTable = ({ patients } : { patients: Patients }) => {
    return (
        <table>
          <PatientsTableHead />
          <PatientsTableBody patients={patients} />
        </table>
    )
}

export default PatientsTable;