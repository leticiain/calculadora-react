import React, {useState} from "react";

const MyHeader = (props) => {

    // Escrever o nome''
    const [str,setStr] = useState('Nome');

    function handleClick(){
        var nome = prompt('Insira um novo nome');
        setStr(nome);
    }


    return (
        <React.Fragment>
            <h3>Bem-vindo(a),</h3>
            <p onClick={()=>handleClick()}>{props.legenda + ' ' + str}</p>
        </React.Fragment>
    );
}

export default MyHeader;