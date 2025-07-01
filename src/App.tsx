import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import DetalhesPrato from "./components/DetalhesPrato";
import FormularioPrato from "./components/FormularioPrato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path="/novo-prato" element={<FormularioPrato />} />
        <Route path="/editar-prato/:id" element={<FormularioPrato />} />
      </Routes>
    </Router>
  );
}

export default App;