import React from "react";


export default class Posts extends React.Component {
    constructor(){
        super();

        this.state = {
            posts: [
                {
                    id: 1,
                    title: "Post 1",
                    content: "This is the first post."
                },
                {
                    id: 2,
                    title: "Post 2",
                    content: "This is the second post."
                },
                {
                    id: 3,
                    title: "Post 3",
                    content: "This is the third post."
                }
            ]
        };
    }

    renderPosts() {
        return this.state.posts.map(post => {
            return (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Blog Posts</h1>
                <div>{this.renderPosts()}</div>
            </div>
        );
    }
}