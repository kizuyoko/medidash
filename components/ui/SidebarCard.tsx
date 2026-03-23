import type { ButtonHTMLAttributes } from 'react';
import { PatientStatus } from '@/types/patient';

type SidebarCardProps = {
  label: string;
  number: number;
  variant?: 'total' | PatientStatus;
  onClick?: () => void;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const SidebarCard = ({
  label,
  number,
  variant = 'total',
  onClick,
  className = '',
  ...props
}: SidebarCardProps) => {
  
  return (
    <button 
      className={`card cursor-pointer min-w-30 text-left ${className}`} 
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
    </button>
  );
};

export default SidebarCard;