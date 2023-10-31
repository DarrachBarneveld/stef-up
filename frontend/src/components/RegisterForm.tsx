import { FunctionComponent, useState } from "react";

interface RegisterFormProps {}

const RegisterForm: FunctionComponent<RegisterFormProps> = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const user = {
      username: userName,
      password: password,
    };
    const response = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <form
      onSubmit={registerUser}
      className="flex flex-col gap-2 rounded-md bg-slate-400 p-5 text-black shadow-lg"
    >
      <label>
        Username:
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </label>
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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
