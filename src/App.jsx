import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Story from "./pages/story";
import Films from "./pages/films";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story/:slug" element={<Story />} />
        <Route path="/films" element={<Films />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;