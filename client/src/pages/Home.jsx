import { useEffect, useState } from "react";
import api from "../services/api"
import { useNavigate } from "react-router-dom";
import PostItem from "../components/PostCard";

function Home() {
  const navigate = useNavigate();
  const [listOfPosts, setOfPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setOfPosts(response.data);
    })
  }, []);

  return (
    <div className="w-2/3 gap-12 flex flex-col p-8">
      <h1 className="caprasimo-font text-4xl">For you</h1>
      {listOfPosts.map((post) => {
        return (
          <PostItem key={post.id} onClick={() => navigate(`/post/${post.id}`)} post={post} />
        );
      })}
    </div>
  )
}

export default Home;