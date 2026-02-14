import type { HTMLAttributes } from 'react';

type SidebarCardProps = {
  label: string;
  number: number;
  variant?: 'total' | 'waiting' | 'in_consult' | 'done' | 'cancelled';
  onClick?: () => void;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const SidebarCard = ({
  label,
  number,
  variant = 'total',
  className = '',
  ...props
}: SidebarCardProps) => {
  
  return (
    <div 
      className={`card ${className}`} 
      style={{
        backgroundColor: `var(--color-bg-${variant})`,
        borderColor: `var(--color-border-${variant})`,
      }}
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