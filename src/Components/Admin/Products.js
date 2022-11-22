import React,{useState} from 'react'
import NavBar from '../Navbars/NavBar';
const Products = () => {
  const [formValues, setFormValues] = useState({
    productName:'',
    description:'',
    price:'',
    features:'',
    imageurl:'',
    category:'',
    })

  const {productName, description, price, features, imageurl,category} = formValues;
  const onChange = (e) =>{
      setFormValues({
          ...formValues,[e.target.name] : e.target.value
      })
  }
  const onSubmitvalues = async () =>{
    try {
      const body = {productName, description, price, features, imageurl, category}
      console.log(body)
      const res = await fetch( `http://localhost:5000/auth/add-product`,{
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(body)
      })
      const parseRes = await res.json()
      console.log(parseRes)
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <>
    <NavBar />
    <center className="mt-4">
          <h1>Add Products</h1>
          </center>
          <div className='productpage'>
          <div className="somecla">
          <div class="row ">
            <div className='col-md-3'></div>
        <div class="col-md-4">
          <label for="inputProduct4" class="form-label">Product Name</label>
          <input type="text" class="form-control" placeholder="Product Name" name='productName' value={productName} onChange = {(e) => onChange(e)} autoComplete='off'/>
        </div>
        <div class="col-md-4">
        <label for="inputDescription4" class="form-label">Description</label>
          <input type="text" class="form-control" placeholder="Description" aria-label="Description" name='description' value={description} onChange = {(e) =>onChange(e)} autoComplete='off' />
        </div>
        </div>
        <div className='row mt-4'>
        <div className='col-md-3'></div>
        <div class="col-md-4">
        <label for="inputImageURL4" class="form-label">Image Url</label>
          <input type="url" class="form-control" placeholder="Image URL" aria-label="Image URL" name='imageurl' value={imageurl} onChange = {(e) =>onChange(e)} autoComplete='off' />
        </div>
        <div class="col-md-4">
        <label for="inputPrice4" class="form-label">Price</label>
          <input type="text" class="form-control" placeholder="Price" aria-label="Price" name='price' value={price} onChange = {(e) =>onChange(e)} autoComplete='off' />
        </div>
        </div>
        <div className='row mt-4'>
        <div className='col-md-3'></div>
        <div class="col-md-4">
        <label for="inputFeatures4" class="form-label">Features</label>
          <input type="text" class="form-control" placeholder="Features" aria-label="Features" name='features' value={features} onChange = {(e) =>onChange(e)} autoComplete='off' />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Category</label>
          <select id="inputState" class="form-select" value={category} name='category' onChange = {(e) =>onChange(e)} autoComplete='off' >
          <option>Please select Category</option>
          <option>Mobile</option>
          <option>Electronic</option>
          <option>Fashion</option>
          <option>Home Appliances</option>
          <option>Kids</option>
          <option>Beauty</option>
          </select>
        </div>
      </div>
      <div className='row mt-4'>
      <div className='col-md-2'></div>
      <div className='col-md-1'></div>
      <div className='col-md-2'>
      <button type="submit" onClick={e => onSubmitvalues(e)} class="btn btn-primary">Submit</button>
      </div>
      <div className='col-md-2'></div>

      </div>
          </div>
          </div>
          
    </>
  )
}
export default Products