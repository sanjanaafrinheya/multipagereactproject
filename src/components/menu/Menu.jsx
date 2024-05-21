import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.png'
import './Menu.css';
import { Link } from 'react-router-dom';
 function Menu() {
  return (
   <>
<Navbar expand="lg" className='naw'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo}alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className=" star mx-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About US</Link>
            <Link to="/feature">Feature</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/faq">Faq</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact"></Link>
            <Button className="bttn"variant="outline-light"><Link to="/contact">Contact us</Link></Button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}
export default Menu;