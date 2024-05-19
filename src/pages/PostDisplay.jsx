import React from "react";
import '../styles/PostDisplay.css';


export default class PostDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editingPostId: null,
            editTitle: "",
            editContent: "",
            editAuthor: ""
        };

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    toggleEditMode(post) {
        this.setState({
            editingPostId: post.id,
            editTitle: post.title,
            editContent: post.content,
            editAuthor: post.author
        });
    }

    handleEditChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    handleEditSubmit(event) {
        event.preventDefault();
        const { editTitle, editContent, editAuthor, editingPostId } = this.state;
        const updatedPost = {
            id: editingPostId,
            title: editTitle,
            content: editContent,
            author: editAuthor,
            created: new Date()
        };
        this.props.updatePost(updatedPost);
        this.setState({ editingPostId: null});
    }

    renderPosts() {

        const { posts } = this.props;
        const { editingPostId, editTitle, editContent, editAuthor } = this.state;

        return posts.map(post => (
            editingPostId === post.id ? (
                <form key={post.id} onSubmit={this.handleEditSubmit}>
                    <input
                        type="text"
                        name="editTitle"
                        value={editTitle}
                        onChange={this.handleEditChange}
                    />
                    <textarea 
                        name="editContent"
                        value={editContent}
                        onChange={this.handleEditChange}
                    />
                    <input
                        type="text"
                        name="editAuthor"
                        value={editAuthor}
                        onChange={this.handleEditChange}
                    />
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <p>{post.author}</p>
                    <p>Posted on: {new Date(post.created).toLocaleString()}</p>
                    <button onClick={() => this.toggleEditMode(post)}>Edit</button>
                </div>
            )
                
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


