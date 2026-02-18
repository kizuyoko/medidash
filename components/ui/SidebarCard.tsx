import type { HTMLAttributes } from 'react';
import { PatientStatus } from '@/types/patient';

type SidebarCardProps = {
  label: string;
  number: number;
  variant?: 'total' | PatientStatus;
  onClick?: () => void;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const SidebarCard = ({
  label,
  number,
  variant = 'total',
  onClick,
  className = '',
  ...props
}: SidebarCardProps) => {
  
  return (
    <div 
      className={`card cursor-pointer ${className}`} 
      style={{
        backgroundColor: `var(--color-bg-${variant})`,
        borderColor: `var(--color-border-${variant})`,
      }}
      onClick={onClick}
      {...props}
    >
      <div
        className={`card-label`}
        style={{ color: `var(--color-text-${variant})`}}
      >
        {label}
      </div>
      <div 
        className={`card-strong`}
        style={{ color: `var(--color-title-${variant})` }}
      >
        {number}
      </div>
    </div>
  );
};

export default SidebarCard;