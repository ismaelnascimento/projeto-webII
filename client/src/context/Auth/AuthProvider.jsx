import { useState, useEffect } from "react";
import api from "../../services/api";
import toast from "react-hot-toast";
import { AuthContext } from "./useAuth";

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (username, password, navigate) => {
    setLoading(true);
    await api
      .post("/users/login", { username, password })
      .then((response) => {
        setIsLoggedIn(true);
        console.log(response);
        setUser(response?.data);
        navigate("/")
      })
      .catch((e) => {
        console.log(e);
        toast(e?.response?.data?.error);
      })
      .finally(() => setLoading(false));
  };

  const register = async (username, password, navigate) => {
    await api
      .post("/users/register", { username, password })
      .then((response) => {
        setIsLoggedIn(true);
        console.log(response);
        setUser(response?.data);
        navigate("/")
      })
      .catch((e) => {
        console.log(e);
        toast(e?.response?.data?.error);
      })
      .finally(() => setLoading(false));
  };

  const logout = async () => {
    await api
      .get("/users/logout")
      .then((response) => {
        console.log(response);
        setIsLoggedIn(false);
        setUser(null);
      })
      .catch((e) => {
        console.log(e);
        toast(e?.response?.data?.error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(false);
    api
      .get("/users/session")
      .then((response) => {
        setIsLoggedIn(true);
        console.log(response);
        setUser(response?.data);
      })
      .catch((e) => {
        console.log(e?.response?.data?.error);
      })
      .finally(() => setLoading(false));
  }, []);

  const value = {
    isLoggedIn,
    user,
    login,
    setLoading,
    loading,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
