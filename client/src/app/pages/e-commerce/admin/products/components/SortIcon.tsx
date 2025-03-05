import { TriangleDownIcon, TriangleUpIcon } from "@/app/svg";

export const SortIconAscend = () => {
  return (
    <div className="relative opacity-70 h-full">
      <span className="absolute top-0">
        <TriangleUpIcon height="8" width="8" />
      </span>
    </div>
  );
};
export const SortIconDescend = () => {
  return (
    <div className="relative opacity-70 bg-red-500 h-full">
      <span className="absolute bottom-0">
        <TriangleDownIcon height="8" width="8" />
      </span>
    </div>
  );
};
export const SortIconNeutral = () => {
  return (
    <div className="relative h-full opacity-70">
      <span className="absolute top-0">
        <TriangleUpIcon height="8" width="8" />
      </span>
      <span className="absolute bottom-0">
        <TriangleDownIcon height="8" width="8" />
      </span>
    </div>
  );
};
