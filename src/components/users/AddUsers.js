import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [addedUsername, setAddedUsername] = useState("");
  const [addedAge, setAddedAge] = useState("");
  const [errors,setErrors]=useState();

  //submit button handler
  const addUserHandler = (event) => {
    event.preventDefault();
    if (addedUsername.trim().length === 0 || addedAge.trim().length === 0) {
      setErrors("Empty fields are not valid");
      return;
    }
    if (+addedAge < 1) {
      setErrors("age should be more than 1");
      return;
    }
    props.onAddUser(addedUsername, addedAge);
    setAddedUsername("");
    setAddedAge("");
  };

  //user input handlers
  const usernameInputHandler = (event) => {
    setAddedUsername(event.target.value);
  };
  const ageInputHandler = (event) => {
    setAddedAge(event.target.value);
  };

  //close modal when clicked
  const errorButtonHandler = ()=>{
    setErrors(null);
  }

  return (
    <div>
    {errors && <ErrorModal header="Warning" content={errors} action="OK" onConfirm={errorButtonHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={addedUsername}
          onChange={usernameInputHandler}
        />

        <label htmlFor="age">Age:</label>
        <input
          id="age"
          type="text"
          value={addedAge}
          onChange={ageInputHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};
export default AddUsers;
