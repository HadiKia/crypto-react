import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Coins from "./components/Coins";
import Landing from "./components/Landing";
import Navbar from "./components/shared/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/coins" element={<Coins/>} />
      <Route path="/home" element={<Landing/>} />
      <Route path="/*" element={<Navigate to="/home"/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
