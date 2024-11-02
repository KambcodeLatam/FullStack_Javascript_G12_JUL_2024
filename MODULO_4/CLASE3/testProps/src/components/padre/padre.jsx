import React from "react";
import Hijo from "../hijo/hijo";

const Padre = ({ encargo }) => {
  console.log("encargo me trae un", encargo);
    
  return (
    <div>
      <div className="line">
        <h1>Componente padre</h1>
        <h2>Que vajilla me llego</h2>
        <p>Un : {encargo}</p>
      </div>
      <div>
        <Hijo vajilla={encargo}/>
      </div>
    </div>
    
  );
};

export default Padre;
