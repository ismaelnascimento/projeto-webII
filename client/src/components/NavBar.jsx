import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="w-1/3 p-8 flex flex-col items-end">
            <div className="flex flex-col gap-12">
                <h1 className="caprasimo-font">Logo</h1>
                <div className="flex flex-col">

                    <Link to="/">Home</Link>
                    <Link to="/createPost">Create post</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;