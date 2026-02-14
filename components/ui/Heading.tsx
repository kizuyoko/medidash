import type { ReactNode } from "react";

type HeadingProps = {
    children: ReactNode;
    level?: 1 | 2 | 3 | 4;
    className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Heading = ({ 
    children, 
    level = 2, 
    className="",
    ...props 
}: HeadingProps) => {
    const Tag = `h${level}` as const;
    const styles: Record<1 | 2 | 3 | 4, string> = {
        1: 'font-bold text-2xl text-blue-600 mb-2',
        2: 'font-bold text-2xl text-gray-900 mb-2',
        3: 'font-semibold text-xl text-gray-900 mb-1',
        4: 'font-medium text-lg text-gray-900 mb-1',
    }

    return (
        <Tag className={`${styles[level]} ${className}`} {...props}>
            {children}
        </Tag>
    );
}

export default Heading;