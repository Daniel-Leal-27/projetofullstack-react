import React from 'react';
import './contato.css';

class Contatos extends React.Component{
    render(){
        return(
            <div>
                <br/>
                <h1 className=" text-center bg-primary">Contate nossa central de atendimento: ALL BIKES</h1>
                
                <br/>

<div className="container text-center">
    
            <h2 className="text-center text-success">Whatsapp</h2>
            <img id="imgs1" src={require(`./contato_01.png`).default} alt="Whatsapp" />

            <br/>
            <p className="contato">(11) 9.2552.4537</p>
            <p className="contato">(11) 9.ALLBIKES</p>
            <p className="contato">Segunda a sexta - 8h às 18h</p>
            <br/>
           



            <h2 className="text-center text-success">E-mail</h2>
            <img id="imgs2" src={require(`./contato_02.jpg`).default} alt="Whatsapp" />

            <p className="contato">central@allbikes.com.br</p>
            <p className="contato">Atendimento 24 horas</p>


    
</div>

            </div>
        )
    }
}

export default Contatos;