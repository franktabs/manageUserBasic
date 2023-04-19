import { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";

function App() {

  const usersData = [
    { id: 1, name: "Marius", username: "theNothing" },
    { id: 2, name: "Niemet", username: "brokeDev" },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }


  return (<div>
    <h1>CRUD Application avec les Hooks</h1>
    <div className="flex-row" >
      <div className="flex-large" >
        <h2>Nouvel utilisateur</h2>
        <AddUserForm addUser={addUser} />
      </div>
      <div className="flex-large">
        <h2>Liste des utilisateurs</h2>
        <UserTable users={users} deleteUser={deleteUser} />
      </div>
    </div>
  </div>);
}

export default App;
