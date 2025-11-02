import React from "react";
import UserInfo from "../User/UserInfo";

const CommentCard = ({ comment }) => {
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
    <div className="mt-2">
      <div className="flex justify-between items-center">
        <UserInfo username={comment?.User?.username || "Anônimo"} />
        <span className="text-sm text-color-text-2">{formatDate(comment?.createdAt)}</span>
      </div>
      <p className="mt-1">{comment.commentBody}</p>
    </div>
  );
};

export default CommentCard;
