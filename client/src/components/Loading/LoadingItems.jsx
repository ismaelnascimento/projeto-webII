import { FourSquare } from "react-loading-indicators";

const LoadingItems = ({size}) => {
  return (
    <div className="w-full h-72 flex items-center justify-center">
      <FourSquare color="#67c0fa" size={size || "medium"} text="" textColor="" />
    </div>
  );
};

export default LoadingItems;
