import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../estilos/CadastroPrato.css";
import API from "../services/api";

function FormularioPrato() {
  const [prato, setpratos] = useState({
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    valor: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setpratos((prevPrato) => ({
      ...prevPrato,
      [name]: value,
    }));
  }

  async function requestPost() {
    const request = await API.post("/pratos", {
      nome: prato.nome,
      cozinha: prato.cozinha,
      valor: prato.valor,
      descricao_resumida: prato.descricao_resumida,
      descricao_detalhada: prato.descricao_detalhada,
    });
    const data = request.data;
    setpratos(data);
  }

  return (
    <div className="cadastro-prato">
      <div className="container">
        <h1>Cadastrar prato</h1>
        <div className="container2">
          <input
            type="text"
            name="nome"
            value={prato.nome}
            onChange={handleChange}
            placeholder="Nome do prato"
          />
          <input
            type="text"
            name="cozinha"
            value={prato.cozinha}
            onChange={handleChange}
            placeholder="Cozinha"
          />
          <input
            type="text"
            name="descricao_resumida"
            value={prato.descricao_resumida}
            onChange={handleChange}
            placeholder="Descrição resumida"
          />
          <input
            type="text"
            name="descricao_detalhada"
            value={prato.descricao_detalhada}
            onChange={handleChange}
            placeholder="Descrição detalhada"
          />
          <input
            type="number"
            name="valor"
            value={prato.valor}
            onChange={handleChange}
            placeholder="Valor"
          />
            <Link to="/">
                <button onClick={requestPost}>Cadastrar</button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default FormularioPrato;