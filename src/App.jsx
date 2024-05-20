import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Importation du composant Provider de react-redux pour fournir le store Redux à l'application
import { Provider } from "react-redux";

import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from "./Components/Home";

// // Importation du store Redux
import store from "./store";
import Create from "./Components/Create";
import Update from "./Components/Update";

function App() {
  return ( 
    // Fournit le store Redux à tous les composants de l'application
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
