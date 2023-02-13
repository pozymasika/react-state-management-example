import React from "react";

/**
 * @param {Object} state
 * @param {React.ChangeEvent<HTMLInputElement>} event
 */
const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const RegisterForm = () => {
  const [formData, setFormData] = React.useReducer(formReducer, {});

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={setFormData} />
      <input type="password" name="password" placeholder="Password" onChange={setFormData} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
