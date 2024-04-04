import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import RequiredAuth from './components/RequiredAuth.js';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';
import AddPostPage from "./pages/AddPostPage";
import EditPostPage from "./pages/EditPostPage.js";
import PostPage from "./pages/PostPage.js";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/add" element={<AddPostPage />} />

        <Route element={<RequiredAuth /> }>
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/edit-post/:postId" element={<EditPostPage />} />
        </Route>


      </Routes>
    </Router>
  );
}

export default App;
