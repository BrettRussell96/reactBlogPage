// External package import
import React from "react";
// Style import
import '../styles/PostDisplay.css';

// PostDisplay class component
export default class PostDisplay extends React.Component {
    constructor(props) {
        super(props);
        // State for post edit form 
        this.state = {
            editingPostId: null,
            editTitle: "",
            editContent: "",
            editAuthor: ""
        };
        // Binding functions to the component instance
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    // Function to toggle edit mode for a post
    toggleEditMode(post) {
        this.setState({
            editingPostId: post.id,
            editTitle: post.title,
            editContent: post.content,
            editAuthor: post.author
        });
    }

    // Function to handle input changes and update the state
    handleEditChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    // Function to handle form submission for editing a post
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

    // Function to handle deleting posts
    handleDelete(post) {
        const confirmation = window.confirm(`Are you sure you want to delete the post "${post.title} permanently?`);
        if (confirmation) {
            this.props.deletePost(post.id);
        }
    }

    // Function to render all posts
    renderPosts() {

        const { posts } = this.props;
        const { editingPostId, editTitle, editContent, editAuthor } = this.state;
        // Renders the post edit form and sumbit button
        // Functions are called on change
        return (
            <div className="post-container">
                {posts.map((post) => 
            editingPostId === post.id ? (
                <form key={post.id} onSubmit={this.handleEditSubmit}>
                    <div className="post-edit-form">
                        <input
                            type="text"
                            name="editTitle"
                            value={editTitle}
                            onChange={this.handleEditChange}
                            placeholder="Title"
                        />
                    </div>
                    <div className="input-row">
                        <textarea 
                            name="editContent"
                            value={editContent}
                            onChange={this.handleEditChange}
                            placeholder="Content"
                        />
                    </div>
                    <div className="input-row">
                        <input
                            type="text"
                            name="editAuthor"
                            value={editAuthor}
                            onChange={this.handleEditChange}
                            placeholder="Author"
                        />
                    </div>
                    <div className="button-container">
                        <button type="submit">Save</button>
                    </div>
                    
                    
                    
                    
                    
                </form>
                // renders template for post display and buttons
            ) : (
                <div key={post.id} className="post">
                    <h2>{post.title}</h2>
                    <h5>{post.author}</h5>
                    <p>{post.content}</p>                    
                    <p className="post-date">Posted on: {new Date(post.created).toLocaleString()}</p>
                    <div className="button-container">
                        <button onClick={() => this.toggleEditMode(post)}>Edit</button>
                        <button onClick={() => this.handleDelete(post)}>Delete</button>
                    </div>
                    
                </div>
            )
        )}
        </div>
            
                
        );
    }

    render() {
        // renders output from renderPosts function with title
        return (
            <div>
                <h1>My Blog</h1>
                <div>{this.renderPosts()}</div>
            </div>
        );
    }
    
};


