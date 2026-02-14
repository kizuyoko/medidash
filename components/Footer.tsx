import FooterIcon from './ui/FooterIcon';

const Footer = () => {
    return (
        <footer>
          <ul>
            <li>
              <FooterIcon 
                src="/github.svg"
                link="https://github.com/kizuyoko/patientdash" 
                alt="GitHub" />
            </li>
            <li>
              <FooterIcon 
                src="/linkedin.svg"
                link="https://www.linkedin.com/in/kizuyoko/" 
                alt="LinkedIn" />
            </li>
          </ul>
        </footer>
    )
}

export default Footer;