
import React from "react";
import PostDisplay from "./PostDisplay";


export default class PostManager extends React.Component {
    constructor(props) {
        super(props);

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

    addPost = (post) => {
        this.setState(prevState => ({
            posts: [...prevState.posts, {...post, id: prevState.posts.length + 1}]
        }));
    }

    render() {
        return (
            <div>
                <PostDisplay posts={this.state.posts} />
            </div>
        );
    }
}

