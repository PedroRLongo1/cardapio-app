import React from "react";
import '../estilos/Login.css';
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";

interface SnackbarState {
    message: string;
    duration: number;
    type?: 'success' | 'error' | 'warning' | 'info';
}

const Login: React.FC = () => {
    const { values, errors, handleChange, validate } = useForm({
        email: "",
        senha: "",
    });

    const [ snackbar, setSnackbar ] = React.useState<SnackbarState>({
        message: "",
        type: 'success',
        duration: 0,
    });

    const navigate = useNavigate();

    return (
        <div className="background">
            <div className="login-card">
                <h2>
                    Login
                </h2>
                <div  className="data-input">
                    <label>Email</label>
                    <input
                        type="text"
                        value={values.email}
                        onChange={handleChange("email")}
                        className={errors.email
                            ? "input-error"
                            : values.email
                            ? "input-success"
                            : "input-default"
                        }
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="data-input">
                    <label>Senha</label>
                    <input
                        type="text"
                        value={values.senha}
                        onChange={handleChange("senha")}
                        className={errors.senha
                            ? "input-error"
                            : values.senha
                            ? "input-success"
                            : "input-default"
                        }
                    />
                    {errors.senha && <p>{errors.senha}</p>}
                </div>
                <button
                    className="login-button"
                    type="button"
                    onClick={() => {}}
                >
                    Entrar
                </button>
            </div>
        </div>
    )
}

export default Login;