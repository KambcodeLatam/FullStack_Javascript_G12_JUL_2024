import React, { useState } from 'react'
import './form.css'

const Form = ({setUser}) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    console.log(name,' name <---');
    console.log(password,' password <---');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(name === '' && password === ''){
            setError(true)
        }else{
            setError(false)
            setUser([name, password])
        }
    }
    

  return (
    <div>
        <h1>Formulario</h1>
        <form className='formStyle' onSubmit={handleSubmit}>
            <p>Nombre</p>
            <input type="text" onChange={e => setName(e.target.value)}/>
            {error && <p className='error'>Este campo es requerido</p>}
            <p>Contrasena</p>
            <input type="text" onChange={e =>  setPassword(e.target.value)}/>
             {error && <p className='error'>Este campo es requerido</p>}
            <button type='submit'>Ingresar</button>
        </form>
    </div>
  )
}

export default Form