import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import PostManager from './components/PostManager';

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostManager />} />
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
