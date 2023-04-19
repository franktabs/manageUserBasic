import { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

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

  const [editing, setEditing] = useState(false);

  const [currentUser, setCurrentUser] = useState({ id: null, name: "", username: "" });


  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  }

  const updateUser = (id, userUpdate) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id == id ? userUpdate : user)));
  }


  return (
    <div>
      <h1 className=" text-center fw-bolder pt-5" >CRUD Application avec les Hooks</h1>
      <div className="flex-row p-5" >
        <div className="flex-large card p-4" >
          {
            editing ? (
              <div>
                <h2>Modification de l'utilisateur</h2>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Nouvel utilisateur</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )
          }

        </div>
        <div className="flex-large card p-4 mx-lg-2">
          <h2>Liste des utilisateurs</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} editing={editing} />
        </div>
      </div>
    </div>);
}

export default App;
