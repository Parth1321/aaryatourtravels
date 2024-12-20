



import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'; // For social media icons
import "../Component/Home.css";
import pachmadhii from "../assets/img/pachmadhi.jpg"; // Correct path and extension
import kanha01 from "../assets/img/kanha01.jpg";
import bhedaghat from "../assets/img/gwalior.jpg";
import khajuraho from "../assets/img/khajuraho.jpg";
import orcha from "../assets/img/orcha.jpg";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
          <Container>
            <Navbar.Brand href="/">
              {/* Logo Image */}
              <img
                src={bhedaghat} // Update with the correct path to your logo image
                alt="Aarya Tour&Travel Logo"
                width="40" // Adjust width as needed
                height="40" // Adjust height as needed
                className="d-inline-block align-top"
              />
              Aarya Tour&Travel
            </Navbar.Brand>
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

        {/* Background Section */}
        <div className="background-image">
          <Container className="text-container">
            <h1 className="text-light">Travel is the only thing you buy that makes you richer.</h1>
            <p className="text-light">Explore the world, make memories, and embark on unforgettable adventures with us!</p>
          </Container>
        </div>
      </div>

      {/* Second Section */}
      <div id="second-section" className="second-section">
        <Container fluid>
          <div className="second-section-content">
            <div className="why-choose-card">
              <h2 className="second-section-heading">Why Choose Us?</h2>
              <div className="why-choose-us">
                <div className="why-item">
                  <h3 className="why-item-heading">Tailored Travel Plans</h3>
                  <p className="why-item-description">Each trip is customized to suit your interests, whether it's a family getaway, a honeymoon, or a solo adventure.</p>
                </div>
                <div className="why-item">
                  <h3 className="why-item-heading">Expert Guidance</h3>
                  <p className="why-item-description">Our team consists of experienced travel consultants who have deep knowledge of popular and off-the-beaten-path destinations.</p>
                </div>
                <div className="why-item">
                  <h3 className="why-item-heading">Customer Satisfaction</h3>
                  <p className="why-item-description">We are committed to providing seamless travel experiences that leave you stress-free and fully satisfied.</p>
                </div>
                <div className="why-item">
                  <h3 className="why-item-heading">Affordable Packages</h3>
                  <p className="why-item-description">Enjoy amazing deals and packages that allow you to experience the world without breaking the bank.</p>
                </div>
                <div className="why-item">
                  <h3 className="why-item-heading">24/7 Support</h3>
                  <p className="why-item-description">We’re here for you every step of the way, offering assistance during your trip to ensure everything runs smoothly.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
<div className="four-cards-container">
        <Container fluid>
          <div className="four-cards-flex">
            <div className="card">
              <img src={bhedaghat} alt="Kanha Tiger Reserve 1" className="card-img" />
            </div>
            <div className="card">
              <img src={khajuraho} alt="Kanha Tiger Reserve 2" className="card-img" />
            </div>
            <div className="card">
              <img src={orcha} alt="Kanha Tiger Reserve 3" className="card-img" />
            </div>
            <div className="card">
              <img src={orcha} alt="Kanha Tiger Reserve 4" className="card-img" />
            </div>
          </div>
        </Container>
      </div>

      {/* Four Cards */}
      <div className="four-cards-container">
        <Container fluid>
          <div className="four-cards-flex">
            <div className="card">
              <img src={bhedaghat} alt="Kanha Tiger Reserve 1" className="card-img" />
            </div>
            <div className="card">
              <img src={khajuraho} alt="Kanha Tiger Reserve 2" className="card-img" />
            </div>
            <div className="card">
              <img src={orcha} alt="Kanha Tiger Reserve 3" className="card-img" />
            </div>
            <div className="card">
              <img src={orcha} alt="Kanha Tiger Reserve 4" className="card-img" />
            </div>
          </div>
        </Container>
      </div>

      {/* Footer Section */}
      <footer className="footer bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>Aarya Tour&Travel</h5>
              <p>
                Your guide to the most amazing travel experiences around the world. Let us help you plan your next adventure!
              </p>
            </Col>
            <Col md={6}>
              <h5>Quick Links</h5>
              <Nav className="flex-column">
                <Nav.Link href="/" className="text-light">Home</Nav.Link>
                <Nav.Link href="/about" className="text-light">About</Nav.Link>
                <Nav.Link href="/contact" className="text-light">Contact</Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h5>Follow Us</h5>
              <Nav>
                <Nav.Link href="https://facebook.com" className="text-light" target="_blank">
                  <FaFacebook size={24} />
                </Nav.Link>
                <Nav.Link href="https://instagram.com" className="text-light" target="_blank">
                  <FaInstagram size={24} />
                </Nav.Link>
                <Nav.Link href="https://twitter.com" className="text-light" target="_blank">
                  <FaTwitter size={24} />
                </Nav.Link>
                <Nav.Link href="https://linkedin.com" className="text-light" target="_blank">
                  <FaLinkedin size={24} />
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
