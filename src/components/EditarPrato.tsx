import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../estilos/EditarPrato.css";
import API from "../services/api";

const EditarPrato: React.FC = () => {

  // requisição para a api para exibir os valores antigo.
  const [prato, setPrato] = useState({
    id: "",
    nome: "",
    cozinha: "",
    descricao_resumida: "",
    descricao_detalhada: "",
    valor: 0,
  });

  const { id } = useParams();

  useEffect(
    () => {
      async function requestData() {
        const request = await API.get(`/pratos/${id}`)
        const data = request.data
        setPrato(data)
      }
      if (id) {
      requestData()
      }
    }, [id]
  )

  async function updateData() {
    const request = await API.put(`/pratos/${id}`, {
      ...prato
    })
  }

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setPrato((prevPrato) => ({
      ...prevPrato,
      [name]: value,
    }));
  }

  return (
    <div className="background">
      <div className="card">
        <div className="back-button">
          <Link to={"/"}>
            <button className="back">{"<-"}</button>
          </Link>
        </div>
        <div className="valores">
          <p>Nome do prato</p>
          <input
            name="nome"
            value={prato.nome}
            onChange={handleChange}
          />
          <p>Cozinha / Nacionalidade do prato</p>
          <input
            name="cozinha"
            value={prato.cozinha}
            onChange={handleChange}
          />
          <p>Descrição breve do prato</p>
          <textarea
            name="descricao_resumida"
            value={prato.descricao_resumida}
            onChange={handleChange}
          />
          <p>Descrição detalhada do prato</p>
          <textarea
            name="descricao_detalhada"
            value={prato.descricao_detalhada}
            onChange={handleChange}
          />
          <p>Valor do prato</p>
          <input
            name="valor"
            value={prato.valor}
            onChange={handleChange}
          />
        </div>
        <div className="confirm-button">
          <Link to={`/detalhes-prato/${id}`}>
            <button
            className="atualizar"
            onClick={updateData}
            >
              Salvar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditarPrato;
