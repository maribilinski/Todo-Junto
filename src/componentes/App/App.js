import { Component } from "react";
import Estudiante from "../Estudiante/Estudiante";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      contador: 1,
      estudiantes: [{
        nombre: "Jane",
        apellido: "Doe",
        edad: 46,
        hairColor: "negro"
      },
      {
        nombre: "John",
        apellido: "Smith",
        edad: 80,
        hairColor: "marron"
      },
      {
        nombre: "Jess",
        apellido: "Smith",
        edad: 65,
        hairColor: "negro"
      },
      {
        nombre: "Maria",
        apellido: "Millord",
        edad: 46,
        hairColor: "marron"
      }
    ]
    }
  }

  incrementarEdad = () =>{
    this.setState({
      contador: this.state.contador +1
    });
  }

  render = () => {
    return(
      <>
        <h1>Contador es {this.state.contador}</h1>
        {this.state.estudiantes.map((estudiante) => {
          return (<Estudiante nombre={estudiante.nombre}
                              apellido={estudiante.apellido}
                              edad={estudiante.edad}
                              hairColor={estudiante.hairColor}
                              incrementarEdad = {this.incrementarEdad}/>)
        })}
      </>
    )
  }
}

export default App;
