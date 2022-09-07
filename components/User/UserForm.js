import classes from "./UserForm.module.css";
import Input from "../UI/Input";
import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../UI/Button";
import RadioInput from "../UI/RadioInput";
import UploadFile from "../UI/UploadFile";

import axios from "axios";
import Title from "../UI/Title";

const UserForm = (props) => {
  // const [amountIsValid, setAmountIsValid] = useState(true);
  //
  const [radioValue, setRadioValue] = useState("");
  const [file, setFile] = useState(null);
  const [positions, setPositions] = useState([]);
  const [token, setToken] = useState("");

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  const radioChangeHandler = (e) => {
    console.log(e.target.value);
    setRadioValue(e.target.value);
  };

  const fileUploadHandler = (data) => {
    console.log(data);
    setFile(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredPosition = +radioValue;
    const enteredFile = file;
    // const enteredAmountNumber = +enteredAmount;
    //
    // if (
    //   enteredAmount.trim().length === 0 ||
    //   enteredAmountNumber < 1 ||
    //   enteredAmountNumber > 5
    // ) {
    //   setAmountIsValid(false);
    //   return;
    // }
    // props.onAddToCart(enteredAmountNumber);\

    // const formData = {
    //   name: enteredName,
    //   email: enteredEmail,
    //   phone: enteredPhone,
    //   position_id: enteredPosition,
    //   photo: enteredFile,
    // };
    const formData = new FormData();
    formData.append("position_id", enteredPosition);
    formData.append("name", enteredName);
    formData.append("email", enteredEmail);
    formData.append("phone", enteredPhone);
    formData.append("photo", file);

    const config = {
      headers: { Token: token, "content-type": "multipart/form-data" },
    };
    const url = "https://frontend-test-assignment-api.abz.agency/api/v1/users";

    // fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
    //   method: "POST",
    //   body: formData,
    //   headers: {
    //     Token: token,
    //     "content-type": "multipart/form-data",
    //   },
    // }).then((response) => {
    //   response.json().then((data) => {
    //     console.log(data);
    //   });
    // });

    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log("render");
  //
  // return (
  //   <form className={classes.form} onSubmit={submitHandler}>
  //     <Input
  //       label="Amount"
  //       ref={amountInputRef}
  //       input={{
  //         type: "number",
  //         id: "amount_" + props.id,
  //         min: 1,
  //         max: 5,
  //         step: 1,
  //         defaultValue: 1,
  //       }}
  //     />
  //     <button>+ Add</button>
  //     {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
  //   </form>
  // );

  const fetchData = async () => {
    const response = await fetch(
      " https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );
    const data = await response.json();

    const loadedPositions = data.positions;

    setPositions(loadedPositions);
  };

  const fetchToken = async () => {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    const data = await response.json();

    const token = data.token;

    setToken(token);
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <Fragment>
      <Title text="Working with POST request" />
      <form onSubmit={submitHandler} className={classes.form}>
        <Input
          label="Your name"
          ref={nameInputRef}
          input={{ type: "text", id: "name" }}
        />
        <Input
          label="Email"
          ref={emailInputRef}
          input={{ type: "text", id: "name" }}
        />
        <Input
          label="Phone"
          ref={phoneInputRef}
          input={{ type: "text", id: "name" }}
        />
        <fieldset id="radioGroup" onChange={radioChangeHandler}>
          {/*<Input label={"QA"} input={{ type: "radio", id: "QA", value: "QA" }} />*/}
          <p>Select your position</p>
          {positions.map((position) => (
            <RadioInput
              key={position.id}
              title={position.name}
              id={position.id}
            />
          ))}
        </fieldset>
        {/*<Input*/}
        {/*  label="File"*/}
        {/*  input={{*/}
        {/*    type: "file",*/}
        {/*    id: "file",*/}
        {/*    accept: "image/jpeg",*/}
        {/*    onChange: (e) => fileChangeHandler(e),*/}
        {/*  }}*/}
        {/*/>*/}
        <UploadFile onFileUpload={fileUploadHandler} />
        <Button> Sign up</Button>
      </form>
    </Fragment>
  );
};

export default UserForm;
