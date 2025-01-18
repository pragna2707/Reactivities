import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export default function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg" className="navbar-dark bg-dark fixed-top">
            <Container>
                <Navbar.Brand as={NavLink} to={'/'} href="#home">
                    <img src="/assets/logo.png" alt="logo" height="30" className="d-inline-block align-top me-2" style={{marginRight: "10px"}}/>
                    Reactivities
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-2">
                        <Nav.Link as={NavLink} to={'/activities'} href="#activities">Activities</Nav.Link>
                        <Nav.Link as={NavLink} to={'/errors'} href="#errors">Errors</Nav.Link>
                    </Nav>
                    <Nav.Link as={NavLink} to={'/createActivity'} href="#createActivity">
                    <Button  
                        variant="success" 
                        className="ms-3"
                    >
                        Create Activity
                    </Button>
                    </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
