import './App.css'
import Card from './components/Card'
import { useState } from 'react';

function App() {
  
  const [nombre,setNombre] = useState("");
  const [formulario,setFormulario] = useState(false);

  const handleSubmit = event=>{
    event.preventDefault();
    if (nombre==="") {
      alert("el nombre no debe estar vacío")
    } else {
      alert("formulario enviado")
    }
    setFormulario(!formulario);

    }
  const alRealizarUnCambio = e =>{setNombre(e.target.value)}

  

  return (
    <>
    <div className='app'>
      <h1>Carga de Estudiantes</h1>
      <form
      onSubmit={handleSubmit}> 
        <label>Nombre </label>
        <input
          value={nombre}
          onChange={alRealizarUnCambio}
        />  
        <button type='submit'>Realizar</button>
      </form>
      <Card/>
    </div>

    </>
  )
}

export default App
