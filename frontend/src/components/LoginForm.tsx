import { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

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
    console.log(data);
    setToken(data.access);
  }

  async function fetchUser() {
    const response = await fetch("http://localhost:8000/api/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <form onSubmit={loginUser}>
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
        <button type="submit">Login</button>
      </form>
      <button onClick={fetchUser}>Fetch User</button>
    </>
  );
};

export default LoginForm;
