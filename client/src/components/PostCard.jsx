const PostItem = ({ post, ...rest }) => {
    return (
        <div {...rest} className="bg-slate-400">
            <div className="title"> {post.title} </div>
            <div className="body">{post.posttext}</div>
            <div className="footer">{post.username}</div>
        </div>
    )
}

export default PostItem;