import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";
import PostCard from "../../components/Post/PostCard";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import UserInfo from "../../components/User/UserInfo";
import CommentCard from "../../components/Comment/CommentCard";
import { useAuth } from "../../context/Auth/useAuth";
import toast from "react-hot-toast";
import LoadingItems from "../../components/Loading/LoadingItems";
import NotFoundItems from "../../components/NotFound/NotFoundItems";

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { isLoggedIn, user } = useAuth();

  const [postObject, setPostObject] = useState(null);
  const [comments, setComments] = useState([]);
  const [inputCommentText, setInputCommentText] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingComments, setLoadingComments] = useState(false);

  useEffect(() => {
    setLoading(true);
    setLoadingComments(true);
    api
      .get(`/posts/${id}`)
      .then((response) => {
        console.log(response);
        setPostObject(response.data);
      })
      .catch((e) => {
        console.log(e);
        toast("Erro ao carregar o post");
      })
      .finally(() => setLoading(false));
    api
      .get(`/comments/${id}`)
      .then((response) => {
        console.log(response);
        setComments(response.data);
      })
      .catch((e) => {
        console.log(e);
        toast("Erro ao carregar os comentários");
      })
      .finally(() => setLoadingComments(false));
  }, [id]);

  const postComment = () => {
    if (inputCommentText?.trim()?.length > 0) {
      api
        .post("/comments", { commentBody: inputCommentText, PostId: id })
        .then((response) => {
          console.log(response);
          setComments([...comments, response.data]);
          setInputCommentText("");
        })
        .catch((e) => {
          console.log(e);
          toast("Erro ao tentar fazer um comentário");
        });
    } else {
      toast("Comentário inválido")
    }
  };

  return (
    <div className="w-full gap-8 flex flex-row p-8">
      <div className="gap-8 flex flex-col flex-[1.5]">

      <h1 className="caprasimo-font text-2xl flex items-center gap-2">
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          size={32}
          color="currentColor"
          strokeWidth={2}
          className="cursor-pointer hover:scale-95"
          onClick={() => navigate("/")}
        />{" "}
        Post
      </h1>

      {loading ? (
        <LoadingItems />
      ) : (
        postObject && <PostCard key={postObject?.id} post={postObject} />
      )}
      </div>

      <div className="flex flex-col w-full gap-2 flex-[1.5] mt-16">
        {isLoggedIn && (
          <div className="flex flex-col w-full gap-2">
            <UserInfo username={user?.username} />
            <div className="flex flex-row gap-2 w-full">
              <input
                id="input-comment-post"
                name="comment"
                onChange={(e) => setInputCommentText(e.target.value)}
                className="rounded-2xl bg-color-bg-light py-2 px-4 flex gap-2 font-bold flex-col w-full"
                placeholder="O que você deseja comentar?"
              ></input>
              <button
                onClick={() => postComment()}
                className="btn-primary text-center flex items-center justify-center w-24"
              >
                Postar
              </button>
            </div>
          </div>
        )}

        {comments?.length > 0 && (
          <h1 className="caprasimo-font text-xl flex items-center gap-2">
            Comentários
          </h1>
        )}
        {loadingComments ? (
          <LoadingItems />
        ) : comments?.length > 0 ? (
          comments?.sort((a, b) => new Date(b?.updatedAt) - new Date(a?.updatedAt))?.map((comment) => (
            <CommentCard key={comment?.id} comment={comment} />
          ))
        ) : (
          <NotFoundItems
            textNotFound={"Aqui vai aparecer os comentários do post"}
          />
        )}
      </div>
    </div>
  );
};

export default Post;
