import { useState } from "react";
import Buscador from "./components/Buscador";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import { BaseColaboradores } from "./BaseColaboradores";

function App() {
  // const listaColaboradoresOriginalConNuevos = BaseColaboradores;
  const [listaColaboradoresOriginalConNuevos, setListaColaboradoresOriginalConNuevos] = useState(BaseColaboradores);

  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const [nombreColaborador, setNombreColaborador] = useState("");
  const [correoColaborador, setCorreoColaborador] = useState("");

  const capturaNombreColaborador = (e) => {
    setNombreColaborador(e.target.value)
  }
  const capturaCorreoColaborador = (e) => {
    setCorreoColaborador(e.target.value)
  }
  const obtenerUltimoId = () => {
    return listaColaboradores[listaColaboradores.length - 1].id
  }

  const enviarFormulario = (e) => {
    e.preventDefault()
    const nuevoColaborador = { id: obtenerUltimoId() + 1, nombre: nombreColaborador, correo: correoColaborador };
    setListaColaboradores([...listaColaboradores, nuevoColaborador])
    setListaColaboradoresOriginalConNuevos([...listaColaboradoresOriginalConNuevos, nuevoColaborador])
  }

  const filtrarColaborador = (e) => {
    const buscarColaborador = e.target.value
    const listaColaboradorActual = [...listaColaboradoresOriginalConNuevos];

    if (buscarColaborador.length > 0) {
      const listaColaboradoresFiltrada = listaColaboradorActual.filter(colaborador => colaborador.nombre.includes(buscarColaborador))
      if (listaColaboradoresFiltrada) {
        setListaColaboradores(listaColaboradoresFiltrada)
      }
    } else {
      setListaColaboradores(listaColaboradoresOriginalConNuevos)
    }    
  }

  return (
    <div className="App">
      <header className="App-header">
        <Buscador filtrarColaborador={filtrarColaborador}></Buscador>
        <Formulario
          enviarFormulario={enviarFormulario}
          capturaNombreColaborador={capturaNombreColaborador}
          capturaCorreoColaborador={capturaCorreoColaborador}>
        </Formulario>
        <Listado colaboradores={listaColaboradores}></Listado>
      </header>
    </div>
  );
}

export default App;
