import type { PatientStatus } from "@/types/patient";
import { generateStatusLabels } from '@/utilities/data';

type StatusBadgeProps = {
  status: PatientStatus;
};

const baseClasses = "inline-flex px-3 py-1 text-sm font-medium rounded-full";
const statusClasses = {
    waiting: " bg-(--color-bg-status-waiting) text-(--color-text-status-waiting)",
    in_consult: " bg-(--color-bg-status-in_consult) text-(--color-text-status-in_consult)",
    done: " bg-(--color-bg-status-done) text-(--color-text-status-done)",
    cancelled: " bg-(--color-bg-status-cancelled) text-(--color-text-status-cancelled)",
}


function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span
            className={`${baseClasses} ${statusClasses[status]}`}
        >
            {generateStatusLabels[status]}
        </span>
    );
}

export default StatusBadge;