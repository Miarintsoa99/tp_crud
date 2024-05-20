import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { UpdateUser } from '../Features/UserReducer';
import { useNavigate } from 'react-router-dom';


function Update() {

  // Utilisation du hook useParams pour extraire les paramètres d'URL
  const {id} = useParams();
  
  // Utilisation du hook useSelector pour accéder à la partie 'users' de l'état global du store Redux
  // La fonction de sélection (state) => state.users retourne la liste des utilisateurs stockée dans Redux
  const users = useSelector((state) =>state.users );
  
  // Filtrer le tableau des utilisateurs pour trouver celui dont l'ID correspond à la valeur extraite des paramètres d'URL
  const existingUser = users.filter(f => f.id == id) ;
  // Utilisation de la déstructuration pour extraire les propriétés de l'utilisateur trouvé
  const {FirtName,LastName,UserName,Age} = existingUser[0];  

  const [ UfirtName, setFirstName] = useState(FirtName);
  const [ UlastName, setLastName] = useState(LastName);
  const [UuserName, setUserName] = useState(UserName);
  const [Uage, setAge] = useState(Age); 
  const dispatch = useDispatch(); 

  const navigate = useNavigate() ;

  const handleUpdate = (event) => {
       event.preventDefault();
       dispatch(UpdateUser({
        id : id,
        FirtName: UfirtName,
        LastName: UlastName,
        UserName: UuserName,
        Age : Uage
        
       }))
       navigate('/');
  }

  return (
    <div className="container">
      <h2 className="mt-3 mb-4">Update User</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name : </label>
          <input
            type="text"
            className="form-control"
            value={UfirtName} 
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name : </label>
          <input
            type="text"
            className="form-control"
            value={UlastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">User Name : </label>
          <input
            type="text"
            className="form-control"
            value={UuserName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age : </label>
          <input
            type="number"
            className="form-control"
            value={Uage}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  )
}

export default Update