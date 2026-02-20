import PatientsTableBody from "./PatientsTableBody";
import PatientsTableHead from "./PatientsTableHead";
import type { DisplayPatient, DisplayPatients } from "../../types/patient";

type Props = {
	patients: DisplayPatients;
	onClick: (patient: DisplayPatient) => void;
	onSort: (field: keyof DisplayPatient) => void;
	sortBy: keyof DisplayPatient | null;
	sortDirection?: "asc" | "desc";
}

const PatientsTable = ({ patients, onClick, onSort, sortBy, sortDirection } : Props) => {
	return (
		<table>
			<PatientsTableHead 
				onSort={onSort}
				sortBy={sortBy}
				sortDirection={sortDirection}
			/>
			<PatientsTableBody 
				patients={patients}
				onClick={onClick}
			/>
		</table>
)
}

export default PatientsTable;