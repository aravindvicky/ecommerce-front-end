import React,{useState} from 'react'
import {ProSidebar,Menu,MenuItem,SidebarHeader,SidebarFooter,SidebarContent} from 'react-pro-sidebar'   
import { FaList } from "react-icons/fa";
import {FiArrowLeftCircle,FiArrowRightCircle} from "react-icons/fi";
import {IoPersonSharp} from "react-icons/io5"
import {MdProductionQuantityLimits} from "react-icons/md"
import {FaFirstOrderAlt} from "react-icons/fa"
import {AiOutlineSetting} from "react-icons/ai"
import {RiLogoutCircleRLine} from "react-icons/ri"
import {FaShoppingCart} from "react-icons/fa"
import "../Header.css";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, useHistory, useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useOutsideClick } from './OutsideClick';
import "./style.css";
import Person from '../Navbars/avatar.jpg'

const NavBar = ({setAuth}) => {
  const [isActive, setIsActive] = useOutsideClick(false);
  const onClick = () => setIsActive(!isActive);
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const history = useHistory()

  const logout = (e) =>{
    e.preventDefault()
    sessionStorage.clear()
    history.push('/login')
    // setAuth(false)
  }
  const role = sessionStorage.getItem('role')
  const email = sessionStorage.getItem('email')
  const mobile = sessionStorage.getItem('mobile')
  const name = sessionStorage.getItem('name')
  return (
    <>
    <div>
         <div id="header" style={{position:"fixed"}}>
      {role === 'admin' && <ProSidebar collapsed={menuCollapse}>
       
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? "A" : 'Aravind'}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem icon={<FaList />}><Link to='/dashboard' >Dashboard</Link></MenuItem>
              <MenuItem icon={<IoPersonSharp />}><Link to='/customers'>Customers</Link></MenuItem>
              <MenuItem icon={<MdProductionQuantityLimits />}><Link to='/add-products'>Products</Link></MenuItem>
              <MenuItem icon={<MdProductionQuantityLimits />}><Link to='/product-list'>Product List</Link></MenuItem>
              <MenuItem icon={<FaFirstOrderAlt />}><Link to='/orders'>Orders</Link></MenuItem>
              <MenuItem icon={<AiOutlineSetting />}><Link to='/settings'>Settings</Link></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<RiLogoutCircleRLine />} onClick={e => {logout(e)}}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>}
      </div>
    </div>

    {/* user nav */}
    {role === 'user' && 
       <Navbar variant="light">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto" style={{marginLeft:'670px',textDecoration:'none'}}>
          <Nav><Link to='/home'>Home</Link></Nav>
          <Nav style={{marginLeft:'20px'}}><Link to='/about'><p style={{marginLeft:'10px'}}>About</p></Link></Nav>
          <Nav style={{marginLeft:'20px'}}><Link to='/contact'><p>Contact</p></Link></Nav>
          <Nav style={{marginLeft:'20px'}}><Link to='/cart'><p style={{marginLeft:'20px'}}><FaShoppingCart /></p></Link></Nav>
        </Nav>

        <div style={{marginLeft:'20px',cursor:'pointer', fontSize:'22px'}}>
          <div>
          <div className="dropdown__container">
        <div className="dropdown__btn" onClick={onClick}>
          <img src={Person} alt='' width='20' />
        </div>
          <div
          className={`dropdown__content ${isActive ? "active" : "inactive"}`}
        >
          <div className="dropdown__info">
            <ul>
            <li>
                <span><span style={{color:'blue'}}>Hello</span> {name}</span>
              </li>
              <li>
                <span>{mobile}</span>
              </li>
              <li>
                <span>{email}</span>
              </li>
              <li>
                <center>
                <button className='btn btn-primary' onClick={(e) => {logout(e)}}>Sign Out</button>
                </center>
              </li>
            </ul>
          </div>
        </div>
      </div>
          </div>
        </div>
      </Container>
          </Navbar> 
    }
    </>
  )
}

export default NavBar