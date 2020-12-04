import React from 'react';

class Endereco extends React.Component{
    render(){
        return(
            <div>

            <h1 className="font-weight-light bg-primary text-center">VENHAM conhecer nossas lojas</h1>

<div className=" container ">
    <h3 className="text-left text-success"> São Paulo - SP </h3>
    <p className="text-left text-secondary">Praça Roberto Gomes Pedrosa, 1</p>
    <p className="text-left text-secondary">Morumbi </p>
    <p className="text-left text-secondary">(11) 3467-0921</p>
    <p className="text-left text-secondary">lojamorumbi@allbikes.com.br</p>
    <p className="text-left text-secondary">Segunda a domingo - 8h às 18h</p>
    <p></p>
</div>
<div className=" container ">
    <h3 className="text-left text-success"> Santos - SP </h3>
    <p className="text-left text-secondary">Rua Princesa Isabel s/n°</p>
    <p className="text-left text-secondary">Santos </p>
    <p className="text-left text-secondary">(13) 3468-0921</p>
    <p className="text-left text-secondary">lojasantos@allbikes.com.br</p>
    <p className="text-left text-secondary">Segunda a domingo - 8h às 18h</p>
</div>
<div className=" container ">
    <h3 className="text-left text-success"> Rio de Janeiro - RJ </h3>
    <p className="text-left text-secondary">Av. Pres. Castelo Branco s/n°</p>
    <p className="text-left text-secondary">Maracanã</p>
    <p className="text-left text-secondary">(21) 2468-0921</p>
    <p className="text-left text-secondary">lojariodejaneiro@allbikes.com.br</p>
    <p className="text-left text-secondary">Segunda a domingo - 8h às 18h</p>
</div>
            </div>
        )
    }
}

export default Endereco;