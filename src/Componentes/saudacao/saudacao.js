import React from 'react';

export default function Saudacao(){

    return (
       <div>
           <h1 className="text-success text-center bg-light">ALL BIKES - aqui você encontra tudo para sua bicicleta</h1>
           <h2 className="text-light bg-warning text-center">Programadores formados pela Recode têm <b className="text-danger">50% </b> de desconto em todo o site</h2>
           <h2 className="text-primary text-center bg-light">Com a allbikes você pedala no seu ambiente preferido</h2>
           <br/>
           <img id="imgs1" src={require(`./Bike6.jpg`).default} alt="Whatsapp" />
           <img id="imgs1" src={require(`./Página Inicial 03.gif`).default} alt="Whatsapp" />
           <img id="imgs1" src={require(`./Bike2.jpg`).default} alt="Whatsapp" />
           <img id="imgs1" src={require(`./Página Inicial 02.gif`).default} alt="Whatsapp" />
           <img id="imgs1" src={require(`./Bike3.jpg`).default} alt="Whatsapp" />
           <br/><br/><br/><br/><br/><br/>
       </div> 
    )
}
