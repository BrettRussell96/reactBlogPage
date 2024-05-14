import React from "react";


export default class PostDisplay extends React.Component {

    renderPosts() {

        const { posts } = this.props;
        return posts.map(post => (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{post.author}</p>
                </div>
        ));
    };

    render() {
        return (
            <div>
                <h1>Blog Posts</h1>
                <div>{this.renderPosts()}</div>
            </div>
        );
    }
    
};


