import React from 'react';
import {Navbar, Nav, NavItem, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import navLogoImg from'../assets/Images/Toptenlogo1.png';
import './CustomNavBar.css';
//component class is equiv to 'as' and Grid is equiv to 'Container' in new bootstrap
// use withRouter to have access to pathname/history from react-router
const CustomNavBar =(props)=>  {

        return( 
        <Navbar fixedTop fluid inverse className="navbar-Style"style= {{backgroundColor:'black'}}>
          <Navbar.Header >
              <Navbar.Brand>
              <Link href="/" to="/"style={{color: 'white',fontWeight:'900'}}>UpNxt Crypto <Image src= {navLogoImg}/></Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav >
              <NavItem eventKey={1} componentClass={Link} href="/crypto-rankings" to="/crypto-rankings" 
              className={props.location.pathname=== "/crypto-rankings" ? 'active': ''}>
              Crypto Rankings
              </NavItem>
              <NavItem eventKey={2} componentClass={Link} href="/crypto-charts" to="/crypto-charts"
              className={props.location.pathname=== "/crypto-charts" ? 'active': ''}  >
              Crypto Charts
              </NavItem>
              <NavItem eventKey={3} componentClass={Link} href="/crypto-news" to="/crypto-news"
              className={props.location.pathname=== "/crypto-news" ? 'active': ''}>
              News
              </NavItem>
             {/* <NavItem eventKey={4} componentClass={Link} href="/about" to="/about"
              className={window.location.pathname=== "/about" ? 'active': ''}>
              About
              </NavItem> */}
      
          </Nav>
          </Navbar.Collapse>
        </Navbar>);
 
}
export default withRouter(CustomNavBar);