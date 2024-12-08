import React from "react";
import { Container,Navbar,Nav, Row, Col, Card, Button } from "react-bootstrap"; // Add Card import
import "./About.css"; // Optional: For custom styling

function About() {
    return (
        
        <div className="about-page">
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
          

            {/* About Content with Card */}
            <div className="content">
                <Container className="mt-50">
                    <Row className="justify-content-center">
                        <Col md={6} lg={4}>
                            <Card className="text-center shadow-lg">
                                <Card.Body>
                                    <Card.Title className="mb-4">Why Choose Us?</Card.Title>
                                    <Card.Text>
                                        We provide the best tour packages with 24/7 customer support,
                                        excellent service, and unforgettable experiences.
                                    </Card.Text>
                                    <Button variant="primary">Learn More</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Footer */}
            <footer className="footer">
                <Container>
                    <Row>
                        <Col className="text-center">
                            <p className="footer-text">© 2024 Trusted Tour & Travel Agency. All Rights Reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default About;
