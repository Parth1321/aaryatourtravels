// src/pages/Contact.jsx
import React from "react";
import { Card,Navbar,Nav, Container, Row, Col, Button } from "react-bootstrap";
import './Contact.css'; // Optional for custom styling

function Contact() {
    return (
        <div>
            {/* Navbar is assumed to be present at the top, as per previous code */}
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
                <Container>
                    <Navbar.Brand href="/">Aarya Tour&Travel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/services">Services</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            {/* Page Content */}
            
            <Container fluid className="d-flex justify-content-center align-items-center min-vh-100">
                <Row className="w-100">
                    <Col xs={12} md={8} lg={6} className="mx-auto">
                        {/* Card to hold address, phone number, and image */}
                        <Card className="shadow-lg">
                            <Row noGutters>
                                <Col md={4}>
                                    <Card.Img 
                                        variant="top" 
                                        src="https://via.placeholder.com/200" // Replace with your image URL
                                        alt="Contact Image"
                                        className="card-img"
                                    />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title className="text-center">Our Company</Card.Title>
                                        <Card.Text>
                                            <strong>Address:</strong> 1234 Travel Street, City, Country<br />
                                            <strong>Phone:</strong> +1 (234) 567-8901<br />
                                            <strong>Email:</strong> contact@company.com
                                        </Card.Text>
                                        <Button variant="primary" href="mailto:contact@company.com">Send an Email</Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>

            {/* Footer (Optional) */}
            <footer className="footer">
                <Container>
                    <div className="text-center py-3">
                        <p>© 2024 Trusted Tour & Travel Agency. All Rights Reserved.</p>
                    </div>
                </Container>
            </footer>
        </div>
    );
}

export default Contact;
