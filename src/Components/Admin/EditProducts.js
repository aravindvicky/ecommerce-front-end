import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../Navbars/NavBar'

const EditProducts = () => {
    const [formValues, setFormValues] = useState({
        product_name:'',
        description:'',
        price:'',
        features:'',
        image_url:'',
        category:'',
        })
    const {id} = useParams();
    const getData = async() =>{
      console.log(id)
      const response = await fetch(`http://localhost:5000/auth/get/${id}`,{
          method: "GET",
          headers : {'Content-Type' : 'application/json'},
      })
      const res=await response.json()
      // console.log(res[0],"res")
      setFormValues(res[0])
      }
    useEffect(()=>{
        getData()
    },[])
    const onChange = (e) =>{
        setFormValues({
            ...formValues,[e.target.name] : e.target.value
        })
    }
    const onSubmitvalues = async () =>{
        try {
            const update = await fetch(`http://localhost:5000/auth/update`,{
                method: 'POST',
                headers: {'Content-Type' : 'application/json'}
            })
            const parseRes = await update.json()
            console.log(parseRes)
            
        } catch (err) {
            console.error(err.message)
        }
    }
  return (
    <>
        <NavBar />
        <center className="mt-4">
          <h1>Edit Products</h1>
          </center>

          <div>
          <div className='productpage'>
          <div className="somecla">
          <div class="row ">
            <div className='col-md-3'></div>
        <div class="col-md-4">
          <label for="inputProduct4" class="form-label">Product Name</label>
          <input type="text" class="form-control" placeholder="Product Name" name='product_name' value={formValues?.product_name} onChange = {(e) => onChange(e)} />
        </div>
        <div class="col-md-4">
        <label for="inputDescription4" class="form-label">Description</label>
          <input type="text" class="form-control" placeholder="Description" aria-label="Description" name='description' value={formValues?.description} onChange = {(e) =>onChange(e)} />
        </div>
        </div>
        <div className='row mt-4'>
        <div className='col-md-3'></div>
        <div class="col-md-4">
        <label for="inputImageURL4" class="form-label">Image Url</label>
          <input type="url" class="form-control" placeholder="Image URL" aria-label="Image URL" name='image_url' value={formValues?.image_url} onChange = {(e) =>onChange(e)} />
        </div>
        <div class="col-md-4">
        <label for="inputPrice4" class="form-label">Price</label>
          <input type="text" class="form-control" placeholder="Price" aria-label="Price" name='price' value={formValues?.price} onChange = {(e) =>onChange(e)} />
        </div>
        </div>
        <div className='row mt-4'>
        <div className='col-md-3'></div>
        <div class="col-md-4">
        <label for="inputFeatures4" class="form-label">Features</label>
          <input type="text" class="form-control" placeholder="Features" aria-label="Features" name='features' value={formValues?.features} onChange = {(e) =>onChange(e)} />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Category</label>
          <select id="inputState" class="form-select" value={formValues?.category} name='category' onChange = {(e) =>onChange(e)} >
          <option>Please select Category</option>
          <option>Mobile</option>
          <option>Electronic</option>
          <option>Fashion</option>
          <option>Home Appliances</option>
          <option>Kids</option>
          <option>Grocery</option>
          <option>Beauty</option>
          </select>
        </div>
      </div>
      <div className='row mt-4'>
      <div className='col-md-2'></div>
      <div className='col-md-1'></div>
      <div className='col-md-2'>
      <button type="submit" class="btn btn-primary" onClick={onSubmitvalues}>Submit</button>
      </div>
      <div className='col-md-2'></div>

      </div>
          </div>
          </div>
          
    </div>
    </>
    
  )
}

export default EditProducts