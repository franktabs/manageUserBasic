import { useState } from "react";

function AddUserForm() {
    const initialFormState = { id: null, name: "", username: "" }
    const [user, setUsers] = useState(initialFormState);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUsers({ ...user, [name]: value });
    }

    return (
        <form >
            <label htmlFor="">Name</label>
            <input type="text" name="name" value="" />
            <label htmlFor="">Username</label>
            <input type="text" name="username" value="" />
            <button>Add new user</button>
        </form>
    );
}

export default AddUserForm;