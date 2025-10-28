const PostItem = ({ post, ...rest }) => {
    return (
        <div {...rest} className="rounded-2xl border inset-shadow-2xs inset-shadow-indigo-500 border-color-bg-light px-4 py-3 flex gap-2 font-bold flex-col">
            <div className="flex gap-2 items-center">
                <div className="w-8 h-8 rounded-full bg-color-bg-light"></div>
                <div className="font-semibold">{post.username}</div>
            </div>
            <div className="font-bold"> {post.title} </div>
            <div className="font-normal">{post.posttext}</div>

        </div>
    )
}

export default PostItem;