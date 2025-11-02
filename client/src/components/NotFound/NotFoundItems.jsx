import { MapsSearchIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const NotFoundItems = ({textNotFound}) => {
  return (
    <div className="w-full flex-col h-72 flex items-center justify-center gap-4">
      <HugeiconsIcon
        icon={MapsSearchIcon}
        size={64}
        className="text-color-text-2"
        strokeWidth={1.5}
      />
      <p className="text-color-text-2 font-medium text-center w-72 text-xl">{textNotFound}</p>
    </div>
  );
};

export default NotFoundItems;
