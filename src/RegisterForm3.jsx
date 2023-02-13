import React from "react";

const RegisterForm = () => {
  const usernameRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data: ", {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={usernameRef} name="username" placeholder="Username" />
      <input type="password" name="password" ref={passwordRef} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
