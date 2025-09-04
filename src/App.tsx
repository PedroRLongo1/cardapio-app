import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import DetalhesPrato from "./components/DetalhesPrato";
import FormularioPrato from "./components/FormularioPrato";
import EditarPrato from "./components/EditarPrato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path="/novo-prato" element={<FormularioPrato />} />
        <Route path="/editar-prato/:id" element={<EditarPrato />} />
      </Routes>
    </Router>
  );
}

export default App;