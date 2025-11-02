import { Link, useLocation } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { routes } from "../routes/routes";
import UserInfo from "./User/UserInfo";
import { Logout01Icon } from "@hugeicons/core-free-icons";
import { useAuth } from "../context/Auth/useAuth";

const NavBar = () => {
  const { pathname } = useLocation();
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <div className="flex-[0.6] p-8 flex flex-col items-end h-full sticky">
      <div className="flex flex-col justify-between h-full gap-4">
        <div className="flex flex-col gap-12 h-full">
          <h1 className="px-4 caprasimo-font text-[40px] text-color-primary text-outline">
            Mídia
          </h1>
          <div className="flex flex-col w-52 gap-4 h-full">
            {routes?.map((route) => {
              const active = !route?.button ? pathname === route?.to : false;
              if (route?.authNavBar && isLoggedIn) return;
              if (route?.to === "/createPost" && !isLoggedIn) return;
              if (route?.showNotNavBar) return;
              return (
                <Link
                  className={
                    route?.button
                      ? "btn-primary"
                      : `${route?.to === "/login" ? "mt-auto" : ""} ${
                          route?.authNavBar
                            ? "border border-color-bg-light"
                            : ""
                        } navbar-button ${
                          active ? "font-extrabold text-color-primary bg-color-second-2" : "font-medium"
                        }`
                  }
                  to={route.to}
                >
                  <HugeiconsIcon
                    icon={route.icon}
                    size={28}
                    stroke={"#67c0fa"}
                    // fill={pathname === route?.to ? "#67c0fa" : ""}
                    color={active ? "#67c0fa" : "#fff"}
                    strokeWidth={1.5}
                  />
                  <p>{route.title}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {isLoggedIn && (
          <div className="flex flex-col">
            <div className="max-w-64 w-64 rounded-2xl flex items-center text-base justify-between font-font gap-4 px-4 py-3 bg-color-bg-light">
              <UserInfo username={user?.username} />
              <HugeiconsIcon
                icon={Logout01Icon}
                onClick={logout}
                size={24}
                color="#d73b3b"
                className="min-w-6 min-h-6 cursor-pointer hover:scale-95"
                strokeWidth={2}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
