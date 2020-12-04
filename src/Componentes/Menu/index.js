import { Navbar, Nav} from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './Menu.css';

function BaseMenu(props) {
    const { location } = props
    return (
        <Navbar className="navbar-dark text-secondary" bg="warning" expand="lg" fixed="top">
            <Navbar.Brand>
                FullstackEletro React
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey ={location.pathname} className="ml-auto mr-3" >
                    <Nav.Item>
                        <Nav.Link as={Link} href="/" to="/">Página Inicial</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/produtos" to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/contato" to="/contato">contato</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/pedidos" to="/pedidos">Pedidos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href="/lojas" to="/lojas">Nossas Lojas</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


const Menu = withRouter(BaseMenu);

export default Menu