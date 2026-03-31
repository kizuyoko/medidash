import type { PatientStatus, Patient } from "@/types/patient";
import { generateStatusLabels } from '@/utilities/data';

type StatusBadgeProps = {
  status: PatientStatus;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const baseClasses = "inline-flex px-3 py-1 text-sm font-medium rounded-full justify-center items-center";

const statusClasses = {
    waiting: " bg-(--color-bg-status-waiting) text-(--color-text-status-waiting)",
    in_consult: " bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)",
    done: " bg-(--color-bg-status-done) text-(--color-text-status-done)",
    cancelled: " bg-(--color-bg-status-cancelled) text-(--color-text-status-cancelled)",
}

function StatusBadge({ status, onClick }: StatusBadgeProps) {
    const Tag = onClick ? "button" : "span";    
    const cursorClass = onClick ? "cursor-pointer" : "cursor-default";
    const className = `${baseClasses} ${cursorClass} ${statusClasses[status]}`;
    return (
        <Tag    
            className={className}
            onClick={onClick}
        >
            {generateStatusLabels[status]}
        </Tag>
    );
}

export default StatusBadge;