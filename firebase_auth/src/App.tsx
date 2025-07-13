
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="/reset-password" element={<h1>Reset Password Page</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
