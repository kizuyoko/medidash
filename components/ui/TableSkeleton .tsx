import Skeleton from "./Skeleton";

const TableSkeleton = () => {
  return (
    <div className="flex  flex-col gap-2 w-1/2">
      <div className="mt-4 w-full flex gap-4">
        <div className="w-1/4">
          <Skeleton />
        </div>
        <div className="w-1/2">
          <Skeleton />
        </div>
        <div className="w-1/4">
          <Skeleton />
        </div>
      </div>
      <div className="mt-4 w-full flex gap-4 ">
        <div className="w-1/4">
          <Skeleton />
        </div>
        <div className="w-1/2">
          <Skeleton />
        </div>
        <div className="w-1/4">
          <Skeleton />
        </div>
      </div>
      <div className="mt-4 w-full flex gap-4 ">
        <div className="w-1/4">
          <Skeleton />
        </div>
        <div className="w-1/2">
          <Skeleton />
        </div>
        <div className="w-1/4">
          <Skeleton />
        </div>
      </div>
    </div>
  );
};

export default TableSkeleton;