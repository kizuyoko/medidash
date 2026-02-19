import PatientsTableBody from "./PatientsTableBody";
import PatientsTableHead from "./PatientsTableHead";
import type { DisplayPatient, DisplayPatients } from "../../types/patient";

type Props = {
	patients: DisplayPatients;
	onClick: (patient: DisplayPatient) => void;
	onSort: (field: keyof DisplayPatient) => void;
}

const PatientsTable = ({ patients, onClick, onSort } : Props) => {
	return (
		<table>
			<PatientsTableHead 
				onSort={onSort}
			/>
			<PatientsTableBody 
				patients={patients}
				onClick={onClick}
			/>
		</table>
)
}

export default PatientsTable;