// External package import
import React from "react";
// Style import
import '../styles/CreatePost.css'

// CreatePost class component
export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        // State for post data
        this.state ={
            title: "",
            content: "",
            author: "",
        };
        // Binding functions to the component instance
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Function to handle input changes and update the state
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Function to handle form submission
    handleSubmit(event) {
        event.preventDefault();
        const { title, content, author } = this.state;
        const timestamp = new Date();
        this.props.addPost({
            title, 
            content, 
            author, 
            created: timestamp 
        });
        this.setState({
            title: "",
            content: "",
            author: ""          
        });
    }

    render() {
        // Renders each form section and submit button
        // Calls functions on change 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-row">
                    <input 
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Title"
                    />
                </div>
                <div className="input-row">
                    <textarea 
                        name="content"
                        value={this.state.content}
                        onChange={this.handleChange}
                        placeholder="Content"
                    />
                </div>
                <div className="input-row">
                    <input 
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange={this.handleChange}
                        placeholder="Author"
                    />
                </div>
                <div className="button-container">
                    <button type="submit">Create Post</button>
                </div>              
            </form>
        );
    }
}