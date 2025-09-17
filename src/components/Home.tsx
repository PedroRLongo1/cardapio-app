import React from "react";
import "../estilos/Home.css";

import { AuthContext, AuthProvider } from "../context/authContext";
import UserArea from "./UserArea";
import HomeGerente from "./HomeGerente";
import HomeUser from "./HomeUser";

function Home() {

  const authContext = React.useContext(AuthContext);
  if (!authContext) {
      throw new Error("Erro: AuthContext não está definido.");
  }
  const { usuario } = authContext;

  return (
    <div className="home">
      <AuthProvider>
        <UserArea />
      </AuthProvider>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      { usuario?.role === "Gerente" && (<HomeGerente />)}
      { (usuario?.role === "Cliente" || usuario?.role === "Funcionário") && (<HomeUser />)}
    </div>
  );
}

export default Home;
