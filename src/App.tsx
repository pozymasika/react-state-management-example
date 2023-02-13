import { useState } from "react";
import reactLogo from "./assets/react.svg";
// import RegisterForm from "./RegisterForm";
// import RegisterForm from "./RegisterForm2";
import RegisterForm from "./RegisterForm3";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <RegisterForm />
    </div>
  );
}

export default App;
