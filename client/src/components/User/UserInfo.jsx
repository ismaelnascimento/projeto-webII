import { UserCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const UserInfo = ({ username }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="w-8 h-8 rounded-full flex items-center justify-center">
        <HugeiconsIcon
          icon={UserCircleIcon}
          size={32}
          color="#909eac"
          strokeWidth={1.5}
        />
      </div>
      <div className="font-semibold text-ellipsis">{username}</div>
    </div>
  );
};

export default UserInfo;
