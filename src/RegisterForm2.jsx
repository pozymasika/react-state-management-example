import React from "react";

const RegisterForm = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data: ", { username, password });
  };

  const onChangeUsername = (event) => setUsername(event.target.value);
  const onChangePassword = (event) => setPassword(event.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={onChangeUsername} />
      <input type="password" name="password" placeholder="Password" onChange={onChangePassword} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
