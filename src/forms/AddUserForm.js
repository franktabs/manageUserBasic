import { useState } from "react";

function AddUserForm(props) {
    const initialFormState = { id: null, name: "", username: "" }
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }



    return (
        <form
            onSubmit={event => {
                event.preventDefault();
                if (!user.name || !user.username) return
                props.addUser(user);
                setUser(initialFormState);
            }}
        >

            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={user.name} onChange={handleInputChange} />
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={user.username} onChange={handleInputChange} />
            <button className=" btn btn-primary" >Add new user</button>
        </form>
    );
}

export default AddUserForm;