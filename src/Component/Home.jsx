// import React from 'react';
// import { Navbar, Nav, Container } from 'react-bootstrap';
// import './Home.css'; // Custom styles for the background


// function Home() {
//     return (
//         <div className="home-container">
//             {/* Navbar */}
//             <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
//                 <Container>
//                     <Navbar.Brand href="#">BrandName</Navbar.Brand>
//                     <Navbar.Toggle aria-controls="navbarNav" />
//                     <Navbar.Collapse id="navbarNav">
//                         <Nav className="ms-auto">
//                             <Nav.Link href="#">Home</Nav.Link>
//                             <Nav.Link href="#">Contact</Nav.Link>
//                             <Nav.Link href="#">Vehicle</Nav.Link>
//                             <Nav.Link href="/About">About</Nav.Link>
//                         </Nav>
//                     </Navbar.Collapse>
//                 </Container>
//             </Navbar>

//             {/* Background Section */}
//             <div className="background-image">
//                 <Container className="text-container">
//                     <h1 className="text-light">Welcome to My Website</h1>
//                     <p className="text-light">A fully responsive fixed navbar over an image</p>
//                 </Container>
//             </div>
//         </div>
//     );
// }

// export default Home;




import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
                <Container>
                    <Navbar.Brand href="/">Aarya Tour&Travel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarNav" />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Background Section  */}
            <div className="background-image">
                 <Container className="text-container">
                     <h1 className="text-light">Welcome to My Website</h1>
                    <p className="text-light">A fully responsive fixed navbar over an image</p>
                 </Container>
           </div>

            {/* Video Background
            <div className="video-background">
                <video autoPlay loop muted className="video">
                    <source src="your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay"></div>
                <Container className="text-container">
                    <h1 className="text-light">Welcome to My Website</h1>
                    <p className="text-light">A fully responsive fixed navbar over a video background</p>
                </Container>
            </div> */}
        </div>
    );
}

export default Home;
