import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PhishingTest from "./pages/PhishingTest";
import Quiz from "./pages/Quiz";
import Tips from "./pages/Tips";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phishing" element={<PhishingTest />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;