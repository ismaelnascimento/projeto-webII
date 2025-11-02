import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import CreatePost from "../pages/Posts/CreatePost";
import Home from "../pages/Posts/Home";
import Post from "../pages/Posts/Post";
import {
  Home07Icon,
  AddCircleIcon,
  Login02Icon,
  UserAdd02Icon,
} from "@hugeicons/core-free-icons";

export const routes = [
  {
    to: "/",
    icon: Home07Icon,
    title: "For you",
    page: <Home />,
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
    page: <Post />,
  },
  {
    authNavBar: true,
    to: "/login",
    icon: Login02Icon,
    title: "Login",
    page: <Login />,
  },
  {
    authNavBar: true,
    to: "/register",
    icon: UserAdd02Icon,
    title: "Cadastro",
    page: <Register />,
  },
];
