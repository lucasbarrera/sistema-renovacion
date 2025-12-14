import React from 'react'

function AddPersonal() {
  return (
    <div className='add-personal'>
      <p>agragar personal</p>

      <form action="">
        <input type="text" placeholder='Nombre' />
        <input type="text" placeholder='Apellido' />
        <input type="text" placeholder='Cargo' />
        <input type="text" placeholder='Telefono' />
        <input type="email" placeholder='Email' />
        <button type="submit">Agregar</button>
      </form>
    </div>
  )
}

export default AddPersonal
