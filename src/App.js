import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pageUrls } from "./utils/urlbase";
import { Home } from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={pageUrls.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
