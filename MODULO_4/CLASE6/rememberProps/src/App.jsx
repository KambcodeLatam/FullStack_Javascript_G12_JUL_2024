import { useEffect, useState } from 'react'
import './App.css'
import Bodega from './components/bodega/bodega'
import Comprador from './components/comprador/comprador'
 
function App() {

  const [orden, setOrden] = useState('')
  const [medicamento, setMedicamento] = useState('')
  
  return (
   <div>
    <h1>Componente App "PADRE"</h1>
    <h3>Comprador: {orden}</h3>
    <h2>--------------------</h2>
    <Bodega setMedicamento={setMedicamento}/>
    <h2>--------------------</h2>
    <Comprador medicamento={medicamento} setOrden={setOrden}/>
    
   </div>
  )
}

export default App
