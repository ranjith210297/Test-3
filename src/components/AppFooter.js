import React from "react";
import Container from "react-bootstrap/Container";
import { Navbar, NavbarBrand } from "react-bootstrap";



class AppFooter extends React.Component {
    render() {
        return(
            <Container>
                <Navbar fixed="bottom" expand="lg" navbar="dark"  bg="primary" text="light">
            
                    <NavbarBrand style={{ paddingLeft: "10px" }}>
                    <span>Copy Rights: All Rights Reserved. </span> 
                    </NavbarBrand>
                </Navbar>
        </Container>
        );
    }
}

export default AppFooter;
