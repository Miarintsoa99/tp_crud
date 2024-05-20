import React from 'react'
//pour accéder à l'état du store Redux dans vos composants fonctionnels React. Il permet de lire des données depuis le store Redux.
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Home() { 

    // Utilisation du hook useSelector pour accéder à la partie 'users' de l'état global du store Redux
    // La fonction de sélection (state) => state.users retourne la liste des utilisateurs stockée dans Redux
    const users = useSelector((state) =>state.users );
    
  return (
    <div className="container">
        <h1 className="mt-2 text-center text-danger">React User Application</h1>
        <Link to="create" className='btn btn-success my-3'>Add User</Link>
        <table className='table'>
            <thead>
                <tr>
                      <th>FistName</th>
                      <th>LastName</th>
                      <th>UserName</th>
                      <th>Age</th>
                      <th>Action</th>
                </tr>
            </thead>
            <tbody>
                 {users.map((user , index) =>(
                    <tr key = {index }>
                        <td>{user.FirtName}</td>
                        <td>{user.LastName}</td>
                        <td>{user.UserName}</td>
                        <td>{user.Age}</td>
                        <td>
                            <button className='btn btn-sm btn-primary' >Edit</button>
                            <button className='btn btn-sm btn-danger ms-2'>Delete</button>
                        </td>
                    </tr>        
                 ))}
            </tbody>
        </table>
    </div>
  )
}

export default Home