import React from 'react'
// destructuracoin de props agregar llaves y nombre de props edentro del parentesis
const saludar = ({ nombre }) => {
  return (
    <div>hola {nombre}</div>
  )
}

export default saludar
