import React, { useState,useEffect } from 'react'
import NavBar from '../Navbars/NavBar'

const Customers = () => {
  const [data, setData] = useState([])
  const customerData = async () =>{ 
    const data = await fetch(`http://localhost:5000/auth//all-customers`,{
      method:'GET',
      headers:{'Content-Type' : 'application/json'}
    })
    const res = await data.json()
    console.log(res, "hellooo buddy")
    setData(res)
  }
  // console.log(data)
  
  useEffect(() =>{
    customerData()
  },[])

  return (
    <>
      <NavBar />
    <div>
     
      <center className="mt-4">
      <h1>Customers</h1>
      </center>

      <div className="container-fluid p-0 somecla">
        <div className='row'>
          <div className='col-md-1'>

          </div>
          <div className='col-md-10 somcla2'>
          <table className="table table-striped table-hover text-center" style={{borderCollapse:'initial'}}>
                            <thead>
                                <tr className="bg-info text-white">
                                    <th>User Name</th>
                                    <th>email</th>
                                    <th>Mobile</th>
                                    <th>Country</th>
                                    <th>Role</th>
                                    {/* <th>Register Date</th> */}
                                </tr>
                            </thead>
                            <tbody>

                        {
                                data.map((item, index) =>{
                                  return(
                                    <tr key={index}>
                                      {Object.keys(item).map((item2,index2)=>
                                         <td>{item?.[item2]}</td>
                                      )
                                      
                                      }
                                    </tr>
                                  )
                                })
                              }
                     </tbody>
                   </table>
          </div>
        </div>
                    
                </div>
      </div>
    </>
  )
}

export default Customers