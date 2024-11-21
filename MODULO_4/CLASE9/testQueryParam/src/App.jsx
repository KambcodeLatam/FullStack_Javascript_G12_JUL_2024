import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Search from "./components/search/search";
import NotFound from "./components/notFound/notFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
