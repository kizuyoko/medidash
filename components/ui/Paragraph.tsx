import type { ReactNode } from "react";

type ParagraphProps = {
    children: ReactNode;
    className?: string;
    size?: 'sm' | 'md' | 'lg'; 
} & React.HTMLAttributes<HTMLParagraphElement>;

const Paragraph = ({
    children, 
    className = "",
    size="md",
    ...props
}: ParagraphProps) => {
    const sizeStyles: Record<typeof size, string> = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };

    return  (
        <p className={`${sizeStyles[size]} ${className}`} {...props}>
            {children}
        </p>
    );
}

export default Paragraph;