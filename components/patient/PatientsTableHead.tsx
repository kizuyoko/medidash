import type { DisplayPatient } from "@/types/patient";

type Props = {
    onSort: (field: keyof DisplayPatient) => void;
    sortBy: keyof DisplayPatient | null; 
    sortDirection?: "asc" | "desc";
}

const PatientsTableHead = ({ onSort, sortBy, sortDirection }: Props) => {
    const renderArrow = (field: keyof DisplayPatient) => {
        if (sortBy === field) {
            return sortDirection === "asc" ? "▲" : "▼";
        }
        return "";
    };

    const thClass = (field: keyof DisplayPatient) => 
        `${sortBy === field ? "font-bold" : ""}`;

    const getAriaSort = (field: keyof DisplayPatient) => {
        if (sortBy === field) {
            return sortDirection === "asc" ? "ascending" : "descending";
        }
    }    

    return (
        <thead>
            <tr>
                <th scope="col" aria-sort={getAriaSort('patientId') ?? 'none'}>
                    <button onClick={() => onSort('patientId')}>
                        Patient ID {renderArrow('patientId')}
                    </button>
                </th>
                <th scope="col" aria-sort={getAriaSort('fullName') ?? 'none'}>
                    <button onClick={() => onSort('fullName')}>
                        Name {renderArrow('fullName')}
                    </button>
                </th>
                <th scope="col" aria-sort={getAriaSort('age') ?? 'none'}>
                    <button onClick={() => onSort('age')}>
                        Age {renderArrow('age')}
                    </button>
                </th>
                <th scope="col" aria-sort={getAriaSort('status') ?? 'none'}>
                    <button onClick={() => onSort('status')}>
                        Status {renderArrow('status')}
                    </button>
                </th>
                <th scope="col" aria-sort={getAriaSort('nextAppointment') ?? 'none'}>
                    <button onClick={() => onSort('nextAppointment')}>
                        Next Appointment {renderArrow('nextAppointment')}
                    </button>
                </th>
                <th scope="col" aria-sort={getAriaSort('condition') ?? 'none'}>
                    <button onClick={() => onSort('condition')}>
                        Condition {renderArrow('condition')}
                    </button>
                </th>
            </tr>
        </thead>
    );
};

export default PatientsTableHead;