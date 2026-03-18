import Skeleton from "./Skeleton";

const TableSkeleton = () => {
  return (
    <div className="flex  flex-col gap-2 w-1/2 mt-4">
      <div className="w-full flex gap-2">
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
      <div className="w-full flex gap-2">
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
      <div className="w-full flex gap-2">
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