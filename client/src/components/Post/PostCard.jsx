
import UserInfo from "../User/UserInfo";

const PostCard = ({ post, ...rest }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div
      {...rest}
      className="rounded-2xl bg-color-bg-light p-5 flex gap-2 font-bold flex-col border border-color-bg-light hover:border-color-bg-light-2"
    >
      <div className="flex justify-between items-center">
        <UserInfo username={post?.username} />
        <span className="text-sm text-color-text-2">{formatDate(post?.createdAt)}</span>
      </div>
      <div className="font-bold text-xl"> {post?.title} </div>
      <div className="font-normal">{post?.posttext}</div>
      {/* <div className="flex flex-row items-center gap-2">
        <div className="flex items-center justify-center gap-2 p-2">
          <HugeiconsIcon
            icon={Comment01Icon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
          <p className="font-medium">{post?.comments?.length}</p>
        </div>
      </div> */}
    </div>
  );
};

export default PostCard;
