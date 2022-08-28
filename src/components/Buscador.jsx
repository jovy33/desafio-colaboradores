import React from 'react'

export default function Buscador({filtrarColaborador}) {
  return (
    <div className='divBuscar'>
        <div className='divH1'>
            <h1>Buscador de Colaboradores</h1>
        </div>
        <div className='divInputBuscar'>
            <input type="text" placeholder='Busca un colaborador' onChange={filtrarColaborador}></input>
        </div>
    </div>
  )
}