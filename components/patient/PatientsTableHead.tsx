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
                <th onClick={() => onSort('patientId')} className={thClass('patientId')} aria-sort={getAriaSort('patientId')}>Patient ID <span className="pl-2">{renderArrow('patientId')}</span></th>
                <th onClick={() => onSort('fullName')} className={thClass('fullName')} aria-sort={getAriaSort('fullName')}>Name <span className="pl-2">{renderArrow('fullName')} </span></th>
                <th onClick={() => onSort('age')} className={thClass('age')} aria-sort={getAriaSort('age')}>Age <span className="pl-2">{renderArrow('age')}</span></th>
                <th onClick={() => onSort('status')} className={thClass('status')} aria-sort={getAriaSort('status')}>Status <span className="pl-2">{renderArrow('status')}</span></th>
                <th onClick={() => onSort('nextAppointment')} className={thClass('nextAppointment')} aria-sort={getAriaSort('nextAppointment')}>Next Appointment <span className="pl-2">{renderArrow('nextAppointment')}</span></th>
                <th onClick={() => onSort('condition')} className={thClass('condition')} aria-sort={getAriaSort('condition')}>Condition <span className="pl-2">{renderArrow('condition')}</span></th>
            </tr>
        </thead>
    );
};

export default PatientsTableHead;