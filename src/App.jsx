import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import Chat from './pages/Chat'
import Test from './pages/Test'
import Aap from './pages/Aap'
import Account from './pages/Account'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Aap />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/test" element={<Test />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
