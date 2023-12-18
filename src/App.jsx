// components and style
import LoginPage from './pages/LoginPage/LoginPage'
import './App.css'
// routing
import { Routes, Route } from "react-router"
import Footer from './components/footer/Footer';

function App() {
  return <div>
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
    <Footer />
  </div>
}

export default App;
