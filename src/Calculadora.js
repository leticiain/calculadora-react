import React, {useState} from "react";
import './Calculadora.css';

const Calculadora = (props) => {
    return(
        <section>
            <h3>{props.titulo}</h3>
            <div id="teclado-virtual">
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <br/>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <br/>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <br/>
            </div>
        </section>
    )
}

export default Calculadora;