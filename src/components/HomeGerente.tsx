import React, { useEffect, useState } from "react";
import "../estilos/HomeGerente.css";
import API from "../services/api"

import { AuthContext, AuthProvider } from "../context/authContext";
import api from "../services/api";
import { Link } from "react-router-dom";

function HomeGerente() {

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
      <div className="home-gerente">
        <AuthProvider>
            <table className="tabela-pratos">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cozinha</th>
                        <th>Descrição</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {pratos.length && pratos.map((pratos, index) => (
                    <tr>
                        <td>{pratos.nome}</td>
                        <td>{pratos.cozinha}</td>
                        <td>{pratos.descricao_resumida}</td>
                        <td>
                            <div className="botoes-acao">
                            <Link to={`/detalhes-prato/${pratos.id}`}>
                              <button>Ver mais</button>
                            </Link>
                            <Link to={`/editar-prato/${pratos.id}`}>
                              <button>Editar</button>
                            </Link>
                            <button onClick={
                              async function deleteData() {
                                await api.delete(`/pratos/${pratos.id}`);
                              }
                            }>
                              Excluir
                            </button>
                            </div>
                        </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </AuthProvider>
      </div>
  );
}

export default HomeGerente;
