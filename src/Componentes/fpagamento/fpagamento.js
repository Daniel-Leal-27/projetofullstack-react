import React from 'react';
import './fpagamento.css';

class Fpagamento extends React.Component{
    render(){
        return (
            <div className="container-fluid text-danger text-center">
                <h3>FORMA DE PAGAMENTO</h3>
                <img id="imgs" src={require(`./Pagamento_01.webp`).default} alt="Forma de Pagamento" />
                <br/><br/>
            </div>
        )
    }
}

export default Fpagamento;