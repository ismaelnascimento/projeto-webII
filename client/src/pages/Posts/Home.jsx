import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import LoadingItems from "../../components/Loading/LoadingItems";
import NotFoundItems from "../../components/NotFound/NotFoundItems";

function Home() {
  const navigate = useNavigate();
  const [listOfPosts, setListOfPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get("/posts")
      .then((response) => {
        setListOfPosts(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-2/4 gap-8 flex flex-col p-8">
      <h1 className="caprasimo-font text-2xl">For you</h1>
      <div className="flex flex-col gap-4">
        {loading ? (
          <LoadingItems />
        ) : listOfPosts?.length <= 0 ? (
          <NotFoundItems textNotFound={"Aqui vai aparecer os posts"} />
        ) : null}
        {listOfPosts
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
          .map((post) => {
            return (
              <PostCard
                key={post.id}
                onClick={() => navigate(`/post/${post.id}`)}
                post={post}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
