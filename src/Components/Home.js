import React,{useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import AdminNav from './Navbars/AdminNav'
import UserNav from './Navbars/UserNav'
import "./Header.css";
import "react-pro-sidebar/dist/css/styles.css";
import { AdminRoutes,UserRoutes } from './Routes';

const Home = ({setAuth}) => {
  const [role, setRole] = useState(localStorage.getItem('role'))
  const [name, setName] = useState("")
  const history = useHistory()
  const [visible, setVisible] = useState(true);


  useEffect(async() =>{
    try {
      const res =  await fetch(`http://localhost:5000/dashboard/`,{
        method : 'GET',
        headers : {jwt_token : localStorage.getItem('token'),}

      })
      const parseRes = await res.json()
      setName(parseRes.user_name)
      console.log("hi",role)
    } catch (error) {
      console.error(error.message);
    }
  },[])
  // console.log("Yo ",role)
  // async function getName() {
  //   try {
  //     const res = await fetch(`http://localhost:5000/dashboard/`,{
  //       method : 'GET',
  //       headers : {jwt_token : localStorage.getItem('token'),}
  //     })
  //     const parseRes = await res.json()
  //     // console.log(parseRes)
  //     setName(parseRes.user_name)
  //     const getRole = localStorage.getItem('role')
  //     // console.log(getRole)
  //     setRole(getRole)
  //     // console.log(getRole)
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }

  function sidebarHandle(){
    // console.log(role)
    switch (role) {
      case 'admin':
        return <AdminNav />;
      default:
        return <UserNav />;

    }
  }

  function routes(){
    // console.log(role)
    switch (role) {
      case 'admin':
        return <AdminRoutes />;
      default:
        return <UserRoutes />;
    }
  }
  return (
    <>
      <div id="header">
        {role && (<div className={!visible ? 'col-8 col-sm-12 col-md-12 col-lg-3 col-xl-2 p-0 m-0 sidebar_m' : 'col-lg-3 col-xl-2 sidebar p-0 m-0'}>
          {sidebarHandle(role)}</div>)}
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-9 route_sec m-0 p-1">{routes(role)}</div>
      </div>
    </>
  )
}
export default Home