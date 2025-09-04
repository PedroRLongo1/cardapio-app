import React, { useContext } from "react";
import pratoImg from "../assets/prato.png"
import { Link } from "react-router-dom";
import "../estilos/CadNovoPrato.css"
import { AuthContext } from "../context/authContext";

const CadNovoPrato = () => {

    const authContext = useContext(AuthContext);
  
    if (!authContext) {
      throw new Error("Erro: AuthContext não está definido.");
    }
  
    const { usuario, verificarLogin } = authContext;
    
    return (
      <>
      { usuario?.role === "Gerente" && (
        <Link to="/novo-prato" className="prato-card">

            <div className="card-adicionar">
              <button className="botao-adicionar">
                <img src={pratoImg} alt="" />
                <p className="texto">Adicionar</p>
              </button>
            </div>
        </Link>
      )}
      </>
    );
}

export default CadNovoPrato;