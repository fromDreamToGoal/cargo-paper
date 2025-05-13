import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      dispatch(login());
    } else {
      alert("Неверные данные");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Логин" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Войти</button>
    </form>
  );
};

export default Login;