import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Posts from './components/PostDisplay';

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Posts />} />
      </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
