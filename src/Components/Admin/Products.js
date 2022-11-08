import React,{useState} from 'react'
import { useHistory, Link } from 'react-router-dom';
const Products = () => {
  const [formValues, setFormValues] = useState({
    // id:null,
    productName:'',
    description:'',
    price:'',
    features:'',
    imageurl:'',
    })

  const {productName, description, price, features, imageurl} = formValues;

  const {email, password} = formValues;
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const history = useHistory()

  const onChange = (e) =>{
      setFormValues({
          ...formValues,[e.target.name] : e.target.value
      })
  }

  const onSubmitvalues = async (e) =>{
    e.prevantDefault();
    setIsSubmit(true)
    try {
      const body = {productName, description, price, features, imageurl}
      console.log(body)
      const res = await fetch( `http://localhost:5000/auth/add-product`,{
        method: 'post',
        headers: {'Content-Type': "application/json"},
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
    <form onSubmit={onSubmitvalues}>
    <div class="form-group">
    <label for="exampleInputEmail1">Image</label>
    <input type="url" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Image URL" name='imageurl' value={imageurl} onChange={(e) => onChange(e)} />
    </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Product Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name" name='productName' value={productName} onChange={(e) => onChange(e)} />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Description</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Description" name='description' value={description} onChange={(e) => onChange(e)} />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Price</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="price" name='price' value={price} onChange={(e) => onChange(e)} />
      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Features</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Features" name='features' value={formValues.features} onChange={(e) => onChange(e)} />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </>
  )
}

export default Products