
function UserTable(props) {
    return (
        <div className=" overflow-auto">
            <table className=" table table-bordered table-hover  table-light" >
                <thead>
                    <tr className=" text-center" >
                        <th>Nom</th>
                        <th>Nom Utilisateur</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.length > 0 ? (
                            props.users.map((user) => (
                                <tr key={user.id} >
                                    <td> {user.name} </td>
                                    <td> {user.username} </td>
                                    <td>
                                        <div className=" d-inline-block text-center "  >
                                            <button className=" button muted-button" onClick={() => props.editRow(user)} >Modifier</button>
                                            {
                                                !props.editing && <button className=" button btn mx-3 btn-danger" onClick={() => props.deleteUser(user.id)} >Supprimer</button>
                                            }
                                        </div>

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>Pas d'utilisateur</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;