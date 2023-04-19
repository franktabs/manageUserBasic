
function UserTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Nom utilisateur</th>
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
                                    <button className=" button muted-button" onClick={() => props.editRow(user)} >Modifier</button>
                                    {
                                        !props.editing && <button className=" button muted-button" onClick={() => props.deleteUser(user.id)} >Supprimer</button>
                                    }

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
    );
}

export default UserTable;