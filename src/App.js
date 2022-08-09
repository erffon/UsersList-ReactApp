import "./App.css";
import AddUsers from "./components/users/AddUsers";
import UsersList from "./components/users/UsersList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const newUserHandler = (uName, uAge) => {
    setUsersList((prevUsers) => {
      return [
        ...prevUsers,
        { name: uName, age: uAge, key: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUsers onAddUser={newUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
