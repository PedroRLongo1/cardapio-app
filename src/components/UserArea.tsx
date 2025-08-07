import React from "react";
import { AuthContext } from "../context/authContext";
import userNoneImage from "../assets/user-none-image.png";
import { Link } from "react-router-dom";

const UserArea: React.FC = () => {

    const authContext = React.useContext(AuthContext);
    if (!authContext) {
        throw new Error("Erro: AuthContext não está definido.");
    }
    const { usuario, verificarLogin } = authContext;

  return (
    <div className="user-area">
      <div className="user-area-infos">
        <div className="user-foto">
          <img src={userNoneImage} alt="foto do usuário" />
        </div>
        <div className="user-info">
          <div>
            <p>Usuário: </p>
            <p>Email: </p>
            <p>Função: </p>
          </div>
          <div>
            <p>{usuario?.nome}</p>
            <p>{usuario?.email}</p>
            <p>{usuario?.role}</p>
          </div>
        </div>
      </div>
      <div className="user-area-logout">
        <Link to="/login">
          <button className="logout-button">Logout</button>
        </Link>
      </div>
    </div>
  );
};

export default UserArea;
