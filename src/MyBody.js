import { render } from "@testing-library/react";
import React, {useState} from "react";
import Calculadora from "./Calculadora";
import './Calculadora.css';
import Operacoes from "./Operacoes";

const MyHeader = (props) => {

    return(
        <React.Fragment>
            <h1>Calculadora</h1>
            <div>
                <Operacoes titulo='Operações' saida='Limpar '/>
                <Calculadora titulo='Teclado Virtual'/>
            </div>
        </React.Fragment>
    )
}

export default MyHeader;