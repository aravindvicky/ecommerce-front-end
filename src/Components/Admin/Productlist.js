import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import NavBar from '../Navbars/NavBar'

const Productlist = () => {
  const [data, setData] = useState([]) 
  const history = useHistory();
  // console.log("first")
  const productData = async () =>{
    const res = await fetch(`http://localhost:5000/auth/all-products`,{
      method:'GET',
      headers: {'Content-Type' : 'application/json'}
    })
    const parseRes = await res.json()
    setData(parseRes)
    console.log(parseRes)
    // console.log(setData)

  }
  // console.log(Object.values(data));
      useEffect(() =>{
        productData()
      },[])
      
   const edit = async (id) =>{
    console.log(id)
      history.push(`/EditProducts/${id}`)
  }

   const productDelete = async (id) =>{
    const deleteProduct = await fetch(`http://localhost:5000/auth/delete/${id}`,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    const res = await deleteProduct.json()
    console.log(res)
  }

  return (
    <>
     <NavBar />
     <div>
      <center>
        <h1>Product List</h1>
      </center>
      <div className="container-fluid p-0 somecla">
        <div className='row'>
          <div className='col-md-1'>
          </div>
          <div className='col-md-10 somcla2'>
          <table className="table table-striped table-hover text-center" style={{borderCollapse:'initial'}}>
                            <thead>
                                <tr className="bg-info text-white">
                                    {/* <th>S.no</th> */}
                                    <th>Product Name</th>
                                    <th>Features</th>
                                    <th>Price</th>
                                    <th>Description</th>
                                    <th>Category</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                        {
                                data.map((item, index) =>{
                                  return(
                                    <tr key={index}>
                                      {Object.keys(item).map((item2,index2)=>{
                                        if(index2 === 5){
                                          return (
                                            <td onClick={(()=>(edit(item.id)))} style={{cursor:'pointer'}}>Edit</td>
                                          )
                                        }
                                        else if(index2 === 4){
                                          return (
                                            <td>{item?.category}</td>
                                          )
                                        }
                                        else if(index2 === 6){
                                          
                                          return (
                                          <td onClick={(()=>(productDelete(item.id)))} style={{cursor:'pointer'}}>Delete</td>
                                          )
                                        }
                                        else {
                                          return <td>{item?.[item2]}</td>
                                        }
                                      })
                                      
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

export default Productlist