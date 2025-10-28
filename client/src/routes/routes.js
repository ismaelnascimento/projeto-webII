import CreatePost from "../pages/CreatePost";
import Home from "../pages/Home";
import Post from "../pages/Post";
import { Home07Icon, AddCircleIcon } from "@hugeicons/core-free-icons";

export const routes = [
    {
        to: "/",
        icon: Home07Icon,
        title: "For you",
        page: <Home />
    },
    {
        to: "/createPost",
        icon: AddCircleIcon,
        title: "Criar post",
        page: <CreatePost />,
        button: true,
    },
    {
        showNotNavBar: true,
        to: "/post/:id",
        page: <Post />
    },
]