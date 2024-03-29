import {Container, Navbar, Nav} from "react-bootstrap";

import {navLinks} from "../data/index.js";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

const NavbarComponent = () => {
    const [changeColor, setChangeColor] = useState(false)

    const changeBackgroundColor = () => {
        if (window.scrollY > 10) {
            setChangeColor(true)
        } else {
            setChangeColor(false)
        }
    }

    useEffect(() => {
        changeBackgroundColor()

        window.addEventListener('scroll', changeBackgroundColor)
    }, []);

    return (
        <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
            <Container>
                <Navbar.Brand href="#home" className="fs-3 fw-bold">Ngoding</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-center">
                        {navLinks.map((navLink) => (
                            <div className="nav-link" key={navLink.id}>
                                <NavLink to={navLink.path}
                                         className={({isActive, isPending}) =>
                                             isPending ? "pending" : isActive ? "active" : ""
                                         }
                                         end
                                >{navLink.text}</NavLink>
                            </div>
                        ))}
                    </Nav>

                    <div className="text-center">
                        <button className="btn btn-outline-danger rounded-1">Join With Us</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;