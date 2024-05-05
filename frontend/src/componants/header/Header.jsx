import React from "react";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Brand from "/images/myntra_logo.webp";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFavorite } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { useSelector } from "react-redux";

function Header() {
  const bag = useSelector((store) => store.bag);
  console.log("bag contain ", bag);
  return (
    
      <Navbar bg="dark" data-bs-theme="dark" fixed="top" className="bg-body-tertiary" >
        <Container fluid="xl">
          <Link to="/">
            {" "}
            <Navbar.Brand>
              <img className="myntra_home" src={Brand} alt="Myntra Home" />
            </Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Nav.Link>
              {" "}
              <Link to="/men"> Men</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/women">Women </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/kids"> Kids</Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/home-and-living"> Home & Living </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/beauty"> Beauty </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link to="/studio">Studio </Link>{" "}
              <Badge bg="secondary">New</Badge>
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for products, brands and more"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
          
          <Nav className="me-auto">
            <div className="d-flex flex-row">
              <div className="d-flex flex-column  ">
                <Nav.Link>
                  <Link to="#">
                    <CgProfile style={{ fontSize: "36px" }} />
                    <p> Profile</p>
                  </Link>
                </Nav.Link>
              </div>
              <div className="d-flex flex-column ">
                <Nav.Link>
                  <Link to="#">
                    <MdOutlineFavorite style={{ fontSize: "36px" }} />
                    <p>Wishlist </p>
                  </Link>
                </Nav.Link>
              </div>
              <div className="d-flex flex-column ">
                <Nav.Link>
                  <Link to="/bag">
                    <IoBag style={{ fontSize: "36px" }} />
                    <sup>{bag.length}</sup>
                    <p>Bag</p>
                  </Link>
                </Nav.Link>
              </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    
  );
}

export default Header;
