import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
<<<<<<< HEAD
import AddPostPage from "./pages/AddPostPage";
=======
>>>>>>> 71b4653683b97af37cc437af21849e2425a588d7

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/add" element={<AddPostPage />} />

      </Routes>
    </Router>
  );
}

export default App;
