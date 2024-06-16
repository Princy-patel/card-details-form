import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [inputValue, setInputValue] = useState({
    name: "",
    cardNumber: "",
    dateMonth: "",
    dateYear: "",
    cvcNumber: "",
  });

  const [submitValue, setSubmitValue] = useState({});

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    cardNumber: "",
    dateMonth: "",
    dateYear: "",
    cvcNumber: "",
  });

  return (
    <div className="flex justify-around relative">
      <Cards
        inputValue={inputValue}
        setInputValue={setInputValue}
        submitValue={submitValue}
      />
      <Form
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSubmitValue={setSubmitValue}
        setErrorMessage={setErrorMessage}
        errorMessage={errorMessage}
      />
    </div>
  );
}

export default App;
