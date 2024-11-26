import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/home.";
import Personajes from "./pages/personajes";
import Episodes from "./pages/episodes";
import NotFound from "./pages/notFound/notFound";
import { NavbarDark } from "./components/navbar/navbar";

function App() {
  return (
   
    <BrowserRouter>
     <NavbarDark/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/episodios" element={<Episodes />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
