import React from "react";
import "../estilos/Home.css";
import banner from "../assets/banner.webp";
import CadNovoPrato from "./CadNovoPrato";

import feijoadaImg from "../assets/feijoada.jpg"
import CardPrato from "./CardPrato";

function Home() {

  const pratos = [
    {
      id: 1,
      nome: "feijoada",
      cozinha: "Brasileira",
      descricao: "Feijão com carne de porco",
      foto: "src/assets/feijoada.jpg"
    }
  ]

  return (
    <div className="home">
      <div className="banner">
        <img src={banner} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
        <div className="lista-pratos">
        <CadNovoPrato />
        <CardPrato
          nome="Feijoada"
          cozinha="Brasileira"
          descricao="Feijão com carne de porco"
          foto={feijoadaImg}
          id={1}
          />
        <CardPrato
          nome="Feijoada"
          cozinha="Brasileira"
          descricao="Feijão com carne de porco"
          foto={feijoadaImg}
          id={2}
          />
        <CardPrato
          nome="Feijoada"
          cozinha="Brasileira"
          descricao="Feijão com carne de porco"
          foto={feijoadaImg}
          id={3}
          />
        <CardPrato
          nome="Feijoada"
          cozinha="Brasileira"
          descricao="Feijão com carne de porco"
          foto={feijoadaImg}
          id={4}
          />
          </div>
    </div>
  );
}

export default Home;
