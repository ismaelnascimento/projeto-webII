import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from "./components/NavBar";
import { routes } from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/Auth/useAuth";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <BrowserRouter>
      <div className="flex flex-row w-full h-screen">
        <Toaster
          position="bottom-center"
          containerClassName="font-bold rounded-2xl"
        />
        <div className="fixed w-[600px] h-full">
          <NavBar />
        </div>

        <div className="flex-1 gap-12 flex flex-col ml-[600px]">
          <Routes>
            {routes?.map((route) => {
              if (route?.to === "/createPost" && !isLoggedIn) return;
              return <Route path={route.to} element={route.page} />;
            })}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
