import './App.css'
import Padre from './components/padre/padre'

function App() {

  const vajilla = 'plato';

  return (
    <div>
      <h1>Componente Jefe Ancestro</h1>
      <div className='line'></div>
      <Padre encargo={vajilla}/>
    </div>
  )
}

export default App
