import React,{useState} from 'react'
import {ProSidebar,Menu,MenuItem,SidebarHeader,SidebarFooter,SidebarContent, SubMenu} from 'react-pro-sidebar'   
import { FaList, FaRegHeart } from "react-icons/fa";
import {FiHome,FiLogOut,FiArrowLeftCircle,FiArrowRightCircle} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "../Header.css";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, useHistory } from 'react-router-dom'


const AdminNav = ({setAuth}) => {

  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const history = useHistory()

  const logout = (e) =>{
    e.preventDefault()
    localStorage.clear()
    history.push('/')
    // setAuth(false)
  }
  const role = localStorage.getItem('role')
  // console.log(role)
  const onClickMenuHander = () =>{

  }
  return (
    <div>
         <div id="header">
       <ProSidebar collapsed={menuCollapse}>
        {/* <Menu iconShape='square' subMenuBullets={true}>
          {role === 'admin' ? (
            <MenuItem>
            <Link to='/home' onClick={onClickMenuHander} />
            </MenuItem>
          ): null}

          <SubMenu>
            <MenuItem>
            <Link to="/dashboard">Dashboard</Link>
            </MenuItem>
          </SubMenu>
        </Menu> */}
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
                <Link to="/home">Home</Link>
              </MenuItem>
              <MenuItem icon={<FaList />}><Link to='/dashboard' >Dashboard</Link></MenuItem>
              <MenuItem icon={<FaList />}><Link to='/customers'>Customers</Link></MenuItem>
              <MenuItem icon={<FaRegHeart />}><Link to='/products'>Products</Link></MenuItem>
              <MenuItem icon={<RiPencilLine />}><Link to='/orders'>Orders</Link></MenuItem>
              <MenuItem icon={<BiCog />}><Link to='/settings'>Settings</Link></MenuItem>
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

export default AdminNav