import React from 'react';
import './lista_produto.css'; 
import axios from 'axios';

class Listaproduto extends React.Component{

    constructor(){ 
        super();

        this.state={

            dados:[],
            categoria:"",
        } 
      this.Categoria = this.Categoria.bind(this);
      
    }

Categoria(e) { 
     this.setState({ categoria:""})
     this.setState({categoria:e.target.value })

 };   
   componentDidMount(){                    
       axios.get('http://localhost/Daniel/09%20-%20React.JS/PHP/Produtos.php' )
       .then( (resposta) => { 
              this.setState({dados:resposta.data} )
              console.log(resposta.data)
        })  
   }
   render(){
    return(
    <div className="container" >
    <br></br>
                <h2>Categorias</h2>
    
    <div className="navbar">
    <div className="row">
    <button  type="button" className="btn btn-outline-success" value=""  onClick={this.Categoria}>Todos
                </button>

                <button  type="button" className="btn btn-outline-success" value='Bicicleta' onClick={this.Categoria}> Bicicleta
                </button>

                <button  type="button" className="btn btn-outline-success" value='Capacete' onClick={this.Categoria}> Capacete
                </button>

                <button  type="button" className="btn btn-outline-success" value='Luz' onClick={this.Categoria}> Luz
                </button>

                <button  type="button" className="btn btn-outline-success"  value='Buzina'  onClick={this.Categoria}> Buzina
                </button>
                
                
                
                </div>
                </div> 
<br/><br/><br></br>          
    <br/>
    <nav className="navbar">
    <div className="container-fluid" >

        {this.state.dados.map((item)=>{  
                    if( this.state.categoria === item.categoria  ){

                        return(

                            <div className="itens1 col col-md-4 text-center">
                                <img id="imgs" src={require(`./img/${item.imagem}`).default} alt="Imagem de Produtos" />
                                <p className="text-secondary" onClick={this.Categoria} id="text1">   {item.descricao } <br/></p>
                                <hr/>
                                <p className="text-primary" id="valor1"> R${ item.preco} </p>
                            </div>
                        )                                    
 }else if( this.state.categoria === "" ){
                        return(

                            <div className="itens1 col col-md-4 text-center">
                                <img id="imgs" src={require(`./img/${item.imagem}`).default} alt="Imagem de Produtos" />
                                <p className="text-secondary" onClick={this.Categoria} id="text1">   {item.descricao } <br/> </p>
                                <hr/>
                                <p className="text-primary" id="valor1"> R${ item.preco} </p>
                            
                            </div>
                        )
                    }          
            })
            }


</div>
    </nav>
    
</div>

)  
};
};

export default Listaproduto;