import { Link } from "react-router-dom"
import { HugeiconsIcon } from '@hugeicons/react';
import { routes } from "../routes/routes";

const NavBar = () => {
    return (
        <div className="w-1/3 p-8 flex flex-col items-end">
            <div className="flex flex-col gap-12">
                <h1 className="caprasimo-font text-4xl text-color-primary text-outline">Mídia</h1>
                <div className="flex flex-col w-52 gap-4">
                    {
                        routes?.map((route) => {
                            if (route?.showNotNavBar) return;
                            return (
                                <Link className={route?.button ? "btn-primary" : "btn-light"} to={route.to}>
                                    <HugeiconsIcon
                                        icon={route.icon}
                                        size={24}
                                        color="currentColor"
                                        strokeWidth={2}
                                    />
                                    <p>{route.title}</p>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default NavBar;