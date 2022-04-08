import React, { useState } from "react";

import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
import Wrapper from "./components/helpers/Wrapper";

function App() {
  const [usersList, setUsersList] = useState([]);

  const saveValues = (Uname, Uage) => {
    console.log(Uname);
    setUsersList((prevState) => {
      return [...prevState, { name: Uname, age: Uage }];
    });
  };

  return (
    <>
      <AddUsers saveValue={saveValues} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
