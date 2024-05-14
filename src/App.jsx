import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './styles/App.css'

import PostDisplay from './pages/PostDisplay';
import CreatePost from './pages/CreatePost';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    const baseTime = new Date().getTime()

    this.state = {
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

    this.addPost = this.addPost.bind(this);
  }

  addPost(post) {
    this.setState(prevState => ({
      posts: [...prevState.posts, {...post, id: prevState.posts.length + 1}]
    }));
  }

  render() {
    return (
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<PostDisplay posts={this.state.posts} />} />
          <Route path="/new" element={<CreatePost addPost={this.addPost}/>} />
        </Routes>
      </BrowserRouter>              
    );
  } 
}

export default App
