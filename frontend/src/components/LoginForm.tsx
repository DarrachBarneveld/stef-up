import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();

    const user = {
      username: userName,
      password: password,
    };
    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    const userData = await fetchUser(data.access);

    if (userData) {
      setUser(userData);
      navigate("/dashboard");
    }
  }

  async function fetchUser(token: string) {
    const response = await fetch("http://localhost:8000/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  }

  return (
    <>
      <form onSubmit={loginUser} className="text-black">
        <label>
          Username:
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="bg-green-500">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
