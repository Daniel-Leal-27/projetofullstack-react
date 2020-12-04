import {Switch, Route} from 'react-router-dom';

import Home from './Pages/Home.js';
import Pedidos from './Pages/Pedidos.js';
import Contato from './Pages/Contato.js';
import Lojas from './Pages/nossas_lojas.js';
import Produtos from './Pages/produtos.js';

function Rotas () {
    return (
        <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/pedidos" component={ Pedidos } />
            <Route exact path="/contato" component={ Contato } />
            <Route exact path="/lojas" component={ Lojas } />
            <Route exact path="/produtos" component={ Produtos } />
        </Switch>
    );
}

export default Rotas;