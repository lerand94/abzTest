import useInput from "../hooks/use-input";

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regexPhone = /^[\+]{0,1}380([0-9]{9})$/;

const isName = (value) => value.trim().length >= 2 && value.trim().length <= 60;
const isEmail = (value) =>
  value.trim().length >= 2 &&
  value.trim().length <= 100 &&
  regexEmail.test(value);
const isPhone = (value) => regexPhone.test(value);

const TestForm = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isName);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isEmail);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && phoneIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(nameIsValid, emailIsValid, phoneIsValid);

    resetName();
    resetPhone();
    resetEmail();
  };

  return (
    <form>
      <input />
    </form>
  );
};

export default TestForm;
