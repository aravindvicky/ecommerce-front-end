import React,{useState,} from 'react'
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent} from 'react-pro-sidebar'
import { FaRegHeart } from "react-icons/fa";
import {
      FiHome,
      FiLogOut,
      FiArrowLeftCircle,
      FiArrowRightCircle
    } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "../Header.css";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, useHistory } from 'react-router-dom'

const UserNav = ({setAuth}) => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  const history = useHistory()
  const logout = (e) =>{
    e.preventDefault()
    localStorage.clear()
    history.replace('/login')
    // setAuth(false)
  }
  return (
    <div>
         <div id="header">
       <ProSidebar collapsed={menuCollapse}>
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
              <MenuItem icon={<FiHome />}>
                <Link to={'/home'}>Home</Link>
              </MenuItem>
              {/* <MenuItem icon={<FaList />}><Link to={'/home'}>Home</Link></MenuItem> */}
              <MenuItem icon={<FaRegHeart />}><Link to={'/collection'}> Collection</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />}><Link to={'/shop'}>Shop</Link></MenuItem>
              <MenuItem icon={<BiCog />}><Link to={'/about'}>About</Link></MenuItem>
              <MenuItem icon={<BiCog />}><Link to={'/contact'}>Contact</Link></MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={e => {logout(e)}}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>

      </div>
    </div>
  )
}

export default UserNav