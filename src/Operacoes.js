import React, {useState} from "react";
import './Calculadora.css';

const Operacoes = (props) => {

    const [result,setStr] = useState('(Escolha uma operação acima)');

    // Chama a função de cálculo desejada
    function handleClick(choice){
        if(choice==0){
            setStr('(Escolha uma operação acima)');
        }else{
            var num1 = parseInt(prompt('Insira o primeiro número'));
            var num2 = parseInt(prompt('Insira o segundo número'));
            switch (choice) {
                case 1:
                    setStr(soma(num1, num2));
                    break;
                case 2:
                    setStr(subtrai(num1, num2));
                    break;
                case 3:
                    setStr(multiplica(num1, num2));
                    break;
                case 4:
                    setStr(divide(num1, num2));
                    break;
                default:
                console.log(`Desculpe, não foi possível calcular.`);            
            }
        }
    }

    // Funções de cálculo
    function soma(a, b){
        return a + b
    }

    function subtrai(a, b){
        return a - b
    }

    function multiplica(a, b){
        return a * b
    }
    
    function divide(a, b){
        return a / b
    }

    return (
        <React.Fragment>
            <h3>{props.titulo}</h3>      
            <ul>
                <li onClick={()=>handleClick(1)}>Soma</li>
                <li onClick={()=>handleClick(2)}>Subtração</li>
                <li onClick={()=>handleClick(3)}>Multiplicação</li>
                <li onClick={()=>handleClick(4)}>Divisão</li>
            </ul>
            <p>Resultado = {result}</p>
            <button id="operacoes-button" onClick={()=>handleClick(0)} >{props.saida}</button>

        </React.Fragment>
    );
}

export default Operacoes;