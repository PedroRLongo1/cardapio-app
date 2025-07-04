import React, { useEffect, useState } from "react";
import "../estilos/Home.css";
import CadNovoPrato from "./CadNovoPrato";
import API from "../services/api"

import CardPrato from "./CardPrato";

function Home() {

  const [ pratos, setpratos ] = useState(
    [
      {
        "id": 0,
        "nome": "",
        "cozinha": "",
        "descricao_resumida": "",
        "valor": 0
      }
    ]
  )

  useEffect(
    () => {

      async function requestData() {
        const request = await API.get('/pratos')
        const data = request.data
        setpratos(data)
      }
      
      requestData()
    }, []
    
  )

  return (
    <div className="home">
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="lista-pratos">
        <CadNovoPrato />
        {pratos.length &&
          pratos.map((pratos, index) => (
            <CardPrato
              key={index}
              id={pratos.id}
              nome={pratos.nome}
              cozinha={pratos.cozinha}
              descricao={pratos.descricao_resumida}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
