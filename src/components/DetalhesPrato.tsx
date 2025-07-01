import React from "react";
import "../estilos/DetalhesPrato.css";
import { Link } from "react-router-dom";

function DetalhesPrato() {
  return (
  <div className="detalhes-prato">
    <div className="detalhes-prato-card">
      <div className="detahes-prato-card-sup">
        <div className="detalhes">
          <h1>Feijoada</h1>
          <p>
            <strong>Cozinha:</strong>Brasileira
          </p>
          <p>
            <strong>Valor:</strong> R$28,00
          </p>
        </div>
      </div>
      <div className="descricao">
        <p>
          <strong>Descrição da sua experiência Gastronômica:</strong> Sinta o sabor inigualável de nossa feijoada, preparada com ingredientes selecionados e tempero único que te leva à sensação de estar desfrutando dessa experiência gastronômica em uma fazenda lá no interior.
        </p>
      </div>
      <Link to="/" className="">
        <button onClick={() => {}}>Voltar</button>
      </Link>
    </div>
  </div>
  );
}

export default DetalhesPrato;