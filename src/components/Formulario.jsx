import React from 'react'

export default function Formulario({enviarFormulario, capturaNombreColaborador, capturaCorreoColaborador}) {
  return (
    <div className='divForm'>
        <form onSubmit={enviarFormulario}>
            <div>
                <label><strong>Nombre del colaborador</strong></label>
                <input type='text' id='inputNombre' onChange={capturaNombreColaborador}></input>
            </div>
            <div>
                <label><strong>Correo del colaborador</strong></label>
                <input type='text' id='inputCorreo' onChange={capturaCorreoColaborador}></input>
            </div>
            <div>
                <button id='btonEnviar'>Agregar colaborador</button>
            </div>
        </form>
        <hr></hr>
    </div>
  )
}
