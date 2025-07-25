import React from "react";
import "../estilos/Login.css";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { Input } from "./Input";
import Container from "./Container";
import api from "../services/api";

interface SnackbarState {
  message: string;
  duration: number;
  type?: "success" | "error" | "warning" | "info";
}

const Login: React.FC = () => {
  const { values, errors, handleChange, validate } = useForm({
    email: "",
    senha: "",
  });

  const [snackbar, setSnackbar] = React.useState<SnackbarState>({
    message: "",
    type: "success",
    duration: 0,
  });

  const navigate = useNavigate();

  const login = async () => {
    const duration = 3000; // 3 seconds

    if (!validate) {
      return;
    }

    try {
      const response = await api.post<{
        token: string;
        refreshToken: string;
        message: string;
      }> ("/login", {
        email: values.email,
        senha: values.senha,
      });

      const { token, refreshToken, message } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("refreshToken", refreshToken);
      setSnackbar({
        message: message || "Login successful!",
        duration,
        type: "success",
      });
      setTimeout(() => {
        navigate("/");
      },duration);
  } catch (error:unknown) {}

  return (
    <Container>
      <h2>Login</h2>
      <div className="data-input">
        <label>Email</label>
        <Input
          value={values.email}
          type="text"
          onChange={handleChange("email")}
        />
      </div>
      <div className="data-input">
        <label>Senha</label>
        <Input
          value={values.senha}
          type="text"
          onChange={handleChange("senha")}
        />
      </div>
      <button className="login-button" type="button" onClick={() => {}}>
        Entrar
      </button>
    </Container>
  );
};

export default Login;
