import React, { useEffect, useState } from "react";
import "../estilos/HomeGerente.css";
import API from "../services/api"

import { AuthContext, AuthProvider } from "../context/authContext";
import CardPrato from "./CardPrato";
import CadNovoPrato from "./CadNovoPrato";

function HomeUser() {

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
    <div className="lista-pratos">
        <AuthProvider>
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
        </AuthProvider>
    </div>
  );
}

export default HomeUser;