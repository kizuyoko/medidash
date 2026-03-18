import Heading from "./Heading";
import Paragraph from "./Paragraph";

type Props = {
  message: string;
};

const ErrorMessage = ({ message }: Props) => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <Heading level={1}>Error</Heading>
      <Paragraph>Error: {message}</Paragraph>
    </main>
  );
};

export default ErrorMessage;