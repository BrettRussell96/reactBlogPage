// Imports from external packages
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
// Style import
import './styles/App.css'
// Component imports
import PostDisplay from './pages/PostDisplay';
import CreatePost from './pages/CreatePost';
import NavBar from './components/NavBar';

// App class component
class App extends React.Component {
  constructor(props) {
    super(props);

    // Gets current time for creating example posts with random dates
    const baseTime = new Date().getTime() 

    this.state = {
      // Example posts
      posts: [
        {
          id: 1,
          title: "Post 1",
          content: "This is the first post.",
          author: "",
          created: new Date(baseTime - Math.random() * 100000000)
      },
      {
          id: 2,
          title: "Post 2",
          content: "This is the second post.",
          author: "",
          created: new Date(baseTime - Math.random() * 100000000)
      },
      {
          id: 3,
          title: "Post 3",
          content: "This is the third post.",
          author: "",
          created: new Date(baseTime - Math.random() * 100000000)
      }
      ]
    };
    // Binding functions to the component instance
    this.addPost = this.addPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  // Function to add a new post
  addPost(post) {
    this.setState(prevState => ({
      posts: [...prevState.posts, {...post, id: prevState.posts.length + 1}]
    }));
  }

  // Function to update an existing post
  updatePost(updatedPost) {
    this.setState((prevState) => ({
      posts: prevState.posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      ),
    }));
  }

  // Function to delete a post
  deletePost(postId) {
    this.setState((prevState) => ({
      posts: prevState.posts.filter((post) => post.id !== postId)
    }));
  }
  
  render() {
    // Renders content and assigns functionality to each route
    return (
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<PostDisplay posts={this.state.posts} updatePost={this.updatePost} deletePost={this.deletePost} />} />
          <Route path="/new" element={<CreatePost addPost={this.addPost}/>} />
        </Routes>
      </BrowserRouter>              
    );
  } 
}

export default App
