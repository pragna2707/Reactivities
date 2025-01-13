// import React from "react";
import { Button, Container, Navbar, Nav } from "react-bootstrap";
import { useStore } from "../stores/store";


export default function NavBar() {
    const {activityStore} = useStore();
    return (
        <Navbar bg="dark" data-bs-theme="dark" fixed="top" expand="lg" className="navbar-dark bg-dark fixed-top">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="/assets/logo.png" alt="logo" height="30" className="d-inline-block align-top me-2" style={{marginRight: "10px"}}/>
                    Reactivities
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-2">
                        <Nav.Link href="#activities">Activities</Nav.Link>
                    </Nav>
                    <Button onClick={() => activityStore.openForm()} variant="success" className="ms-3">Create Activity</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}