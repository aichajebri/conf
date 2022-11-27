import Allconference from "./Component/Allconference";
import Addconference from "./Component/Addconference";
import Editconference from "./Component/Editconference";
import Showconference from "./Component/Showconference";
import NavBar from "./Component/NavBar";
import NavBarc from "./Component/NavBarc";

import NotFound from "./Component/NotFound";
// import Home from "./Component/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/all" element={<Allconference />} />
        <Route path="/add" element={<Addconference />} />
        <Route path="/edit/:id" element={<Editconference />} />
        <Route element={<NotFound />} />
      </Routes>
      {/* <NavBarc />
      <Routes>
        <Route path="/show" element={<Showconference />} />
      </Routes> */}
    </BrowserRouter>
  );
}

export default App;
