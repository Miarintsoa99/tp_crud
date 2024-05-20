
import React, { useState } from 'react';

// Import de l'action addUser depuis le réducteur UserReducer situé dans le répertoire Features

// permettra de dispatcher des actions pour mettre à jour l'état du store Redux 
import { addUser } from '../Features/UserReducer';
import { useDispatch, useSelector } from 'react-redux';



function Create() {
  // Définir les états locaux pour les champs du formulaire
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  
  // Utilisation du hook useSelector pour accéder à la partie 'users' de l'état global du store Redux
  // et stocker les utilisateurs dans la variable locale 'users'
  const users = useSelector((state) => state.users)

  // Utilisation du hook useDispatch pour obtenir une référence à la fonction dispatch du store Redux
  const dispatch =  useDispatch();

  // navigation

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); 

    // Dispatch de l'action addUser pour ajouter un nouvel utilisateur au store Redux
    // Génération de l'ID pour le nouvel utilisateur en ajoutant 1 à l'ID du dernier utilisateur
    dispatch(addUser({id: users[users.lenght-1].id + 1, firstName ,  lastName ,  userName , age}))
    
    // Réinitialiser les états des champs du formulaire après la soumission
    setFirstName('');
    setLastName('');
    setUserName('');
    setAge('');
  };

  return (
    <div className="container">
      <h2 className="mt-3 mb-4">Create User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Create;
