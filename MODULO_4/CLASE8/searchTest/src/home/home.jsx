import React, { useState } from "react";

import Table from "../components/table/table";
import Search from "../components/search/search";

const Home = () => {

    const [buscar, setBuscar] = useState('')

    console.log(buscar,'buscar');
    
    
  return (
    <div>
      <Search setBuscar={setBuscar}/>
      <Table buscar={buscar}/>
    </div>
  );
};

export default Home;
