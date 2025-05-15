import { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setError("");
      onLogin();
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="login-background">
      <div className="login-overlay">
        <form onSubmit={handleSubmit} className="login-form">
          {error && <p className="login-error">{error}</p>}
          <div className="login-field">
            <label className="login-label">Логин</label>
            <input
              type="text"
              placeholder="Введите логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </div>
          <div className="login-field">
            <label className="login-label">Пароль</label>
            <input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
          </div>
          <button type="submit" className="login-button">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;