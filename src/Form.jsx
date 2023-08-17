import { useState } from "react";


const Form = (props) => {
  const [nombre, setNombre] = useState('')
  const [materia, setMateria] = useState('')
  const [email, setEmail] = useState('')
  const [mensajeError, setMensajeError] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    nombre.trimStart();
    if (nombre.length < 3) {
      setMensajeError('Por favor, chequea que la informacion ingresada sea correcta')
    } else if (materia.length < 6) {
      setMensajeError('Por favor, chequea que la informacion ingresada sea correcta')
    } else if (email.length < 1) { 
      setMensajeError('El campo E-mail no puede estar vacío')
    } else {
      props.onSubmit({ nombre, materia, email })
      setNombre('')
      setMateria('')
      setEmail('')
      setMensajeError('')
    }
  }
          return (
            <div>
              <h1>Ingresa los datos del alumno</h1>
              <form onSubmit={handleSubmit}>
                <label>
                  Nombre:
                  <input
                    type='text'
                    value={nombre}
                    onChange={(event) => setNombre(event.target.value)}
                  />
                </label>
                <br />
                <label>
                  Materia:
                  <input
                    type='text'
                    value={materia}
                    onChange={(event) => setMateria(event.target.value)}
                  />
                </label>
                <br />
                <label>
                  E-mail:
                  <input
                    type='text'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>
                <br />
                <button class='button' type='submit'>Registrarse</button>
              </form>
              {mensajeError && <p>{mensajeError}</p>}
            </div>
          )
          };      
          
export default Form;