import {useState} from 'react';
import { Form, Button, Row } from 'react-bootstrap';

export default function Pedidos() {
    const [ form, setForm ] = useState({
        nome: "",
        endereco: "",
        fone: "",
        valor: "",
        quantidade: "",
        preco_final: ""
    })

    const controleMudanca = (evento) => {
        console.log(evento.target.value)
        setForm({
            ...form,
            [evento.target.id]: evento.target.value
        })
    }

    const controleEnvio = async (evento) => { 
        evento.preventDefault();
        const preco_final = parseFloat(form.valor) * parseFloat(form.quantidade);
        document.getElementById("preco_final").value = `R$ ${preco_final}`;

        const json = JSON.stringify(form);

        const opcoes = {
            method: 'POST',
            headers: { 'Content-type': 'application/json', "Acces-Control-Allow-Origin": "*"},
            body: json
        }

        const resposta = await fetch("http://localhost/Daniel/09 - React.JS/PHP/cadastro_produtos.php", opcoes)
        const dados = await resposta.json()
        console.log(dados);
     }

    return (
        <Row>
            <div className='col-lg-6 col-md-6 mx-auto'>
                <Form onSubmit={controleEnvio}>
                    <h4>Fazer Pedidos</h4>
                    <Form.Group>
                        <Form.Label>Nome:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="nome" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Endereco:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="endereco" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Telefone:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="telefone" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Produto</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="produto" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Valor:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="valor" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Quantidade:</Form.Label>
                        <Form.Control onChange={controleMudanca} type="text" id="quantidade" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Preço Final:</Form.Label>
                        <Form.Control disabled type="text" id="preco_final" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Cadastrar
                    </Button>
                </Form>
            </div>
        </Row>
    );
}