import React from 'react'

export default function Listado({ colaboradores }) {
    return (
        <div className='divLista'>
            <h2>Listado de colaboradores</h2>
            <ul>
                {colaboradores.map(colaborador => 
                    <li key={colaborador.id}>
                        {colaborador.nombre} - {colaborador.correo}
                    </li>)
                }
            </ul>            
            <hr></hr>
        </div>
    )
}
