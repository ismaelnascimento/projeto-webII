import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/createPost">Create post</Link>
        </div>
    )
}

export default NavBar;