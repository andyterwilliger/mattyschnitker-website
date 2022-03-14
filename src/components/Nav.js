import { findRenderedComponentWithType } from "react-dom/test-utils";
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap'

function NavBar(){
    return(
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">MS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About</Nav.Link>
        <Nav.Link href='blah'>Pictures</Nav.Link>
        <Nav.Link href='contact'>Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar;