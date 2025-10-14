import './App.css';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import { BrowserRouter, Routes, Route } from "react-router";
import NavBar from './components/NavBar';
import Post from './pages/Post';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
