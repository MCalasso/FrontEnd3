

function Card(user) {
  return (
    <div className= 'Card'>
      <h3>Datos del registro:</h3>
      <ul>

          <li className='card' key={user.id}>
            <p>Nombre: {user.data.nombre}</p>
            <p>Materia: {user.data.materia}</p>
            <p>Email: {user.data.email}</p>
            <p>¡La inscripción fue realizada con éxito!</p>
            <p>Te enviaremos confirmación al correo electrónico registrado</p>
          </li>

      </ul>
    </div>
  );
}

export default Card;
