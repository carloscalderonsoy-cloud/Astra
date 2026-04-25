import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Servicios from "@/pages/Servicios";
import Reservaciones from "@/pages/Reservaciones";
import Nosotros from "@/pages/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/reservaciones" element={<Reservaciones />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
