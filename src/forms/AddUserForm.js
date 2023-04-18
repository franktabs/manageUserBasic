
function AddUserForm() {
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