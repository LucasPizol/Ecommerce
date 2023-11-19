import { Container } from "react-bootstrap";
import LoginForm, { Fields } from "../../components/AuthPage/LoginForm/LoginForm";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Auth = () => {
  const [toast, setToast] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (e: any, fields: Fields) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fields),
    });
    const successfulMessage = await res.json();

    if (successfulMessage.error) {
      setError(successfulMessage.error);
      setToast(true);

      setTimeout(() => {
        setToast(false);
      }, 2000);

      setTimeout(() => {
        setError(null);
      }, 2500);
      return;
    }

    sessionStorage.setItem("coffe-shop-token", successfulMessage.token);

    navigate("/");
  };

  return (
    <main className={styles.main}>
      <Container className={styles.container}>
        <img src="/login_picture.jpg" className={styles.loginPicture} />
        <div className={styles.loginSide}>
          <div>
            <p>Boas vindas ao</p>
            <h1>Coffee Shop</h1>
          </div>
          <LoginForm login={login} error={error} />
          <hr></hr>
          <p className={styles.register}>
            Ainda não tem conta? <Link to="/">Cadastre-se</Link>
          </p>
        </div>
      </Container>
      <div className={styles.error} style={toast ? { transform: "translateX(0)" } : { transform: "translateX(100%)" }}>
        <p className={styles.errorText}>{error}</p>
      </div>
    </main>
  );
};

export default Auth;
