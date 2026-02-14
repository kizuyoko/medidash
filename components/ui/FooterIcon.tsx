import Image from 'next/image';
import Link from 'next/link';

type FooterItemProps = {
    src: string;
    link: string;
    alt: string;
}

const Footer = ({ src, link, alt }: FooterItemProps ) => {
    return (
			<Link
				href={link} 
				target="_blank" 
				rel="noopener noreferrer"
			>
				<Image 
					src={src} 
					alt={alt} 
					width={30} 
					height={30}
					className="transition-transform duration-200 hover:scale-110"
				/>
			</Link>
    );
}

export default Footer;