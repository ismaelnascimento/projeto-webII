import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from './components/NavBar';
import { routes } from './routes/routes';

function App() {
  return (

    <BrowserRouter>
      <div className="flex flex-row justify-center w-full h-full">
        <NavBar />
        <Routes>
          {
            routes?.map((route) => (
              <Route path={route.to} element={route.page} />
            ))
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
