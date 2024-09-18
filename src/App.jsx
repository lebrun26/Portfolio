import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Presentation from "./pages/Presentation";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
