import './App.css'
import Hijo from './components/Hijo';
import Card from './components/Card'
import { useState } from 'react';

function App() {
  
  const [nombre,setNombre] = useState("");
  const [cartel,setCartel] = useState(false);
  const [libro,setLibro] = useState("");



  const handleSubmit = event=>{
    event.preventDefault();
    if (((nombre.length<3)||(nombre[0]!=" "))||(libro.length<6)) {
      setCartel(!cartel);
    }  }
  


  const alRealizarUnCambio = e =>{setNombre(e.target.value)}

  

  return (
    <>
    <div className='form'>
      <h1>Elige tu libro favorito</h1>
      <form
      onSubmit={handleSubmit}> 
        <label>Nombre </label>
        <input
          type='text'
          placeholder='ingrese su nombre'
          value={nombre}
          onChange={alRealizarUnCambio}
        />  
        <br></br>
        <label>Libro Favorito</label>
        <input
          type='text'
          placeholder='ingrese el libro'
          value={libro}
          onChange={e=>{setLibro(e.target.value)}}
          />
        <button type='submit'>Enviar Datos</button>
      </form>
      {//if(cartel){
        <p>por favor chequea que la información sea correcta</p>
      }
      {//else
        <Card>
      <Hijo nombre ={nombre}libro ={libro}/>
      </Card>
      }
      
      
        
    </div>

    </>
  )
}

export default App

