import React from "react";
import pratoImg from "../assets/prato.png"
import { Link } from "react-router-dom";
import "../estilos/CadNovoPrato.css"

const CadNovoPrato = () => {
    return (
        <Link to="/novo-prato" className="prato-card">

            <div className="card-adicionar">
              <button className="botao-adicionar">
                <img src={pratoImg} alt="" />
                <p className="texto">Adicionar</p>
              </button>
            </div>
        </Link>
    );
}

export default CadNovoPrato;