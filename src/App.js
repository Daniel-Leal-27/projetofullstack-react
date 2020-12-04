import Menu from './Componentes/Menu'
import Rodape from './Componentes/rodapé/rodape'
import Rotas from './rotas';
import Fpagamento from './Componentes/fpagamento/fpagamento'

import { BrowserRouter } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
      <Menu />
      </header>
      <main>
        <Container fluid>
          <Rotas />
          <Fpagamento />
          
          <Rodape />
        </Container>

      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
