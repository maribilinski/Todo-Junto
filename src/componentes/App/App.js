import { useState } from "react";
import Estudiante from "../Estudiante/Estudiante";

const App = () => {
  const estudiantesInicial = [{
    nombre: "Jane",
    apellido: "Doe",
    edad: 45,
    hairColor: "Negro"
  },
  {
    nombre: "John",
    apellido: "Smith",
    edad: 88,
    hairColor: "Marron"
  },
  {
    nombre: "Millard",
    apellido: "Fillmore",
    edad: 50,
    hairColor: "Negro"
  },
  {
    nombre: "Maria",
    apellido: "Smith",
    edad: 62,
    hairColor: "Marron"
  }];

  const [listaEstudiantes, setListaEstudiantes] = useState(estudiantesInicial);
  
  return (
    <>
      listaEstudiantes.map ((estudiante) => {
        return (<Estudiante nombre={estudiante.nombre}
                            apellido= {estudiante.apellido}
                            edad = {estudiante.edad}
                            hairColor = {estudiante.hairColor}/>)
      })
    </>
  );
}

export default App;
