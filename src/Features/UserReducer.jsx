// createSlice est une fonction utilitaire fournie par Redux Toolkit pour créer un slice Redux plus facilement.
import { createSlice } from "@reduxjs/toolkit";

// userList est une donnée initiale dans data
import { userList } from "../../public/data/Data";
import Update from "../Components/Update";

// Création d'un slice Redux appelé "userSlice" pour gérer l'état des utilisateurs.
// Un slice est une portion de l'état Redux qui concerne une fonctionnalité spécifique.
const userSlice = createSlice({
  // Nom du slice. Ce nom est utilisé pour générer les types d'action et dans le store Redux.
  name: "users",

  // État initial du slice. Ici, il est initialisé avec la liste d'utilisateurs importée.
  initialState: userList,

  // Réducteurs pour ce slice. Un réducteur est une fonction qui gère les mises à jour de l'état.
  reducers: {
    // Réducteur addUser : cette fonction gère l'action 'addUser'
    addUser: (state, action) => {
      // Ajoute le nouvel utilisateur (payload de l'action) à la fin du tableau 'state'
      state.push(action.payload);
      //'state' fait référence à l'état actuel du slice, et 'action' contient les données envoyées avec l'action
      //Redux Toolkit utilise une approche "mutable" pour la mise à jour de l'état, donc nous pouvons modifier 'state' directement
      //console.log(action);
    },

    // Réducteur pour mettre à jour un utilisateur existant dans l'état Redux
    UpdateUser: (state, action) => {
      // Déstructuration des propriétés de l'action payload
      const { id, FirstName, LastName, UserName, Age } = action.payload;

      // Trouver l'utilisateur existant par son ID
      const userToUpdate = state.find((user) => user.id === id);

      // Si l'utilisateur est trouvé, mettre à jour ses propriétés
      if (userToUpdate) {
        userToUpdate.FirstName = FirstName;
        userToUpdate.LastName = LastName;
        userToUpdate.UserName = UserName;
        userToUpdate.Age = Age;
      }
    },

    // reducueur pour delete users
    deleteUser: (state, action) => {
        // Déstructuration des propriétés de l'action payload
        const { id } = action.payload;
      
        // Trouver l'utilisateur existant par son ID
        const userToDelete = state.find(user => user.id === id);
      
        // Si l'utilisateur est trouvé, retourner un nouvel état sans cet utilisateur
        if (userToDelete) {
          return state.filter(user => user.id !== id);
        }
      },
      

  },
});

export const { addUser, UpdateUser ,  deleteUser} = userSlice.actions;
export default userSlice.reducer;
