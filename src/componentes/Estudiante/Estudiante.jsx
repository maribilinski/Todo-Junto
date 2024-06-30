import { Component } from "react";
/*
const Estudiante = (props) => {
    return (
        <>
            <h2> {props.apellido}, {props.nombre} </h2>
            <p>Edad: {props.edad}</p>
            <p>Color de pelo: {props.hairColor}</p>
        </>
    );
}
*/



class Estudiante extends Component{
    constructor (props){
        super (props);
    }
    render = () => {
        return (
            <>
                <h2> {this.props.apellido}, {this.props.nombre} </h2>
                <p>Edad: {this.props.edad}</p>
                <p>Color de pelo: {this.props.hairColor}</p>
                <button onClick={this.props.incrementarEdad}>Boton de cumple para {this.props.nombre} {this.props.apellido}</button>
            </>
        )
    }
}

export default Estudiante;