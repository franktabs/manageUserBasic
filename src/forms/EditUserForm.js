import { useEffect, useState } from "react";

function EditUserForm(props) {
    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    return (
        <form onSubmit={event => {
            event.preventDefault();
            props.updateUser(user.id, user);
        }} >
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={user.name} onChange={handleInputChange} />
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={user.username} onChange={handleInputChange} />
            <div className=" d-inline-block mt-3">
                <button className=" btn btn-primary" >Modifier</button>
                <button onClick={() => props.setEditing(false)} className=" btn btn-light mx-3" >Annuler</button>
            </div>
        </form>
    );
}

export default EditUserForm;