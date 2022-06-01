import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg">
               
                <Nav>
                <NavLink className="d-inline p-2 bg-dark text-white" to="/Reservation">
                    
                </NavLink>

                </Nav>
            
            </Navbar>
        )
    }
}
