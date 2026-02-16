import type { PatientStatus } from "@/types/patient";

export const generatePatientId = (id: number): string => `PT-${String(id).padStart(4, "0")}`;

export const generateFullname = (
    first_name: string,
    last_name: string,
    middle_name?: string
): string => {
    let fullName = "";

    if (middle_name) {
        fullName = `${first_name} ${middle_name} ${last_name}`;
    } else {
        fullName = `${first_name} ${last_name}`;
    }

    return fullName;
}

export const calculateAge = (birthday: string): number => {
    const birthDate = new Date(birthday); 
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export const generateAgeText = (birthday: string): string => {
    const age = calculateAge(birthday);

    const ageText = age === 0 
        ? 'Less than 1 year' 
        : `${age} year${age === 1 ? '' : 's'}`;
        
    return ageText;
}

export const generateStatusLabels: Record<PatientStatus, string> = {
    waiting: "Waiting",
    in_consult: "In Consult",
    done: "Done",
    cancelled: "Cancelled",
};