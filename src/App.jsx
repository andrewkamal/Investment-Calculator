import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputId, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputId]: +newValue,
      };
    });
  }
  return (
    <>
      <Header></Header>
      <UserInput userInput={userInput} change={handleChange}></UserInput>
      {!inputIsValid && (
        <p className="center">
          Please enter a valid duration value greater than zero
        </p>
      )}
      {inputIsValid && <Result userInput={userInput}></Result>}
    </>
  );
}

export default App;
