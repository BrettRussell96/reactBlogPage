import React from "react";
import '../styles/CreatePost.css'


export default class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            title: "",
            content: "",
            author: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

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
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="Title"
                />
                <textarea 
                    name="content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder="Content"
                />
                <input 
                    type="text"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleChange}
                    placeholder="Author"
                />
                <button type="submit">Create Post</button>
            </form>
        );
    }
}