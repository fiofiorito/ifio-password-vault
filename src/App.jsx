// components and style
import LoginPage from './pages/LoginPage/LoginPage';
import Footer from './components/footer/Footer';
import MainPage from './pages/MainPage/MainPage';
import './App.css'
// routing
import { Routes, Route } from "react-router"

function App() {
  return <div>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<MainPage />} />
    </Routes>
    <Footer />
  </div>
}

export default App;
