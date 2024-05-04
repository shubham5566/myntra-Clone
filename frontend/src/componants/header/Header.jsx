import React from 'react'
import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Brand from "/images/myntra_logo.webp"
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdOutlineFavorite } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { useSelector } from 'react-redux';

function Header() {
  const bag = useSelector((store)=>store.bag);
  console.log("bag contain ",bag)
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container  fluid="xl">
          <Link to="/"> <Navbar.Brand ><img className="myntra_home" src={Brand} alt="Myntra Home"/></Navbar.Brand></Link>
          <Nav className="me-auto">
            <Nav.Link > <Link to ="/men"> Men</Link></Nav.Link>
            <Nav.Link > <Link to = "/women">Women </Link></Nav.Link>
            <Nav.Link > <Link to = "/kids"> Kids</Link></Nav.Link>
            <Nav.Link > <Link to = "/home-and-living"> Home & Living </Link></Nav.Link>
            <Nav.Link > <Link to = "/beauty"> Beauty </Link></Nav.Link>
            <Nav.Link > <Link to = "/studio">Studio </Link>  <Badge bg="secondary">New</Badge></Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for products, brands and more"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="me-auto">
            <div   className='d-flex flex-row'>

            <Nav.Link > <Link to ="#"> <CgProfile /> Profile </Link></Nav.Link>
            <Nav.Link > <Link to = "#"> <MdOutlineFavorite />Wishlist </Link></Nav.Link>
            <Nav.Link > <Link to = "/bag"><IoBag /> Bag <Badge bg="secondary">{bag.length}</Badge>
            </Link></Nav.Link>
            </div>
            
          </Nav>
      
        </Container>
      </Navbar>


    </>
 
  )
}

export default Header



{/* <header>
<div class="logo_container">
    <a href="#"><img class="myntra_home" src="../images/myntra_logo.webp" alt="Myntra Home"/></a>
</div>
<nav class="nav_bar">
    <a href="#">Men</a>
    <a href="#">Women</a>
    <a href="#">Kids</a>
    <a href="#">Home & Living</a>
    <a href="#">Beauty</a>
    <a href="#">Studio <sup>New</sup></a>
</nav>
<div class="search_bar">
    <span class="material-symbols-outlined search_icon">search</span>
    <input class="search_input" placeholder="Search for products, brands and more"/>
</div>
<div class="action_bar">
    <div class="action_container">
        <span class="material-symbols-outlined action_icon">person</span>
        <span class="action_name">Profile</span>
    </div>

    <div class="action_container">
        <span class="material-symbols-outlined action_icon">favorite</span>
        <span class="action_name">Wishlist</span>
    </div>

    <div class="action_container">
        <span class="material-symbols-outlined action_icon">shopping_bag</span>
        <span class="action_name">Bag</span>
        <span class="bag-item-count">0</span>
    </div>
</div> */}