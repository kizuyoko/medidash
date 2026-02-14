import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";
import Button from "./ui/Button";

const Header = () => {
    return (
        <header>
          <div className="flex justify-between items-end">
            <div>
              <Heading>Patient List</Heading>
              <Paragraph>Overview of all registered patients</Paragraph>
            </div>
            <Button>New</Button>
          </div>
        </header>  
    )
}

export default Header;