import PredictionForm from "./components/PredictionForm";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<PredictionForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
