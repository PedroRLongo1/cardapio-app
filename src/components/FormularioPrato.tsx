import React from "react";
import "../estilos/CadastroPrato.css";

function FormularioPrato() {
  return (
    <div className="cadastro-prato">
        <div className="container">
            <h1>Cadastrar prato</h1>
            <div className="container2">
                <div className="inputs">
                    <input type="text" name="nome" placeholder="Digite o nome do prato" />
                    <input type="text" name="cozinha" placeholder="Digite a nacionalidade do prato" />
                    <input type="text" name="valor" placeholder="Digite o preço do prato" />
                    <input type="text" name="descrição-breve" placeholder="Digite uma descrição breve" />
                    <input type="text" name="descrição-detalhada" placeholder="Digite uma descrição detalhada" />
                    <input type="text" name="imagem" placeholder="Digite uma URL para a imagem do prato" />
                </div>
                <div className="button">
                    <button type="submit">Cadastrar</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default FormularioPrato;