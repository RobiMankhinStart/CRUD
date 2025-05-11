import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Update from "./Components/Update";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
