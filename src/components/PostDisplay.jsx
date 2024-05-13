import React from "react";


const PostDisplay = ({ posts }) => {

    const renderPosts = () => {
        return posts.map(post => (

                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{post.author}</p>
                </div>
        ));
    };

    return (
        <div>
            <h1>Blog Posts</h1>
            <div>{renderPosts()}</div>
        </div>
    );
};

export default PostDisplay
