import type { DisplayPatient } from "@/types/patient";

type Props = {
    onSort: (field: keyof DisplayPatient) => void;
}

const PatientsTableHead = ({ onSort }: Props) => {
    return (
        <thead>
            <tr>
                <th onClick={() => onSort('patientId')}>Patient ID</th>
                <th onClick={() => onSort('fullName')}>Name</th>
                <th onClick={() => onSort('age')}>Age</th>
                <th onClick={() => onSort('status')}>Status</th>
                <th onClick={() => onSort('nextAppointment')}>Next Appointment</th>
                <th onClick={() => onSort('condition')}>Condition</th>
            </tr>
        </thead>
    );
};

export default PatientsTableHead;