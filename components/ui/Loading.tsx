import Heading from "./Heading";
import TableSkeleton from "./TableSkeleton ";

const Loading = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <Heading level={1}>Loading...</Heading>
      <TableSkeleton /> 
    </main>
  );
};

export default Loading;
