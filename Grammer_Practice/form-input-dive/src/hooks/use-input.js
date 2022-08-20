import { useState } from "react";

const useInput = (validateInputFn) => {
  const [userInput, setUserInput] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const inputIsValid = validateInputFn(userInput);
  const hasError = !inputIsValid && isTouched;

  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };

  const touchHandler = () => {
    setIsTouched(true);
  };

  const resetInputHandler = () => {
    setIsTouched(false);
    setUserInput("");
  };

  return {
    value: userInput,
    isValid: inputIsValid,
    hasError: hasError,
    resetInput: resetInputHandler,
    onChange: inputChangeHandler,
    onBlur: touchHandler,
  };
};

export default useInput;
