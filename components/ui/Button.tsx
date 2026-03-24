import type { ButtonHTMLAttributes, ForwardedRef } from "react";
import { forwardRef } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      disabled = false,
      className = "",
      onClick,
      ...props
    }, ref: ForwardedRef<HTMLButtonElement>
  ) => {
  const baseClasses =
    "px-4 py-2 rounded rounded-full font-medium shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors";
  const disabledClasses =
    "bg-[var(--color-btn-disabled)] text-[var(--color-btn-disabled-text)] cursor-not-allowed";  

  const variantClasses = {
    primary: disabled
      ? disabledClasses
      : "bg-[var(--color-btn-primary)] text-[var(--color-btn-primary-text)] hover:bg-[var(--color-btn-primary-hover)] cursor-pointer",
    secondary: disabled
      ? disabledClasses
      : "bg-[var(--color-btn-secondary)] text-[var(--color-btn-secondary-text)] hover:bg-[var(--color-btn-secondary-hover)]  cursor-pointer",
  };

  return (
    <button
      ref= {ref}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    />
  );
  }
);
Button.displayName = "Button";
export default Button;