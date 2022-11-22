import React,{useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'


 const Login = ({ setAuth }) => {

    const [formValues, setFormValues ] = useState({
        email :'',
        password :''
    })

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
        e.preventDefault();
        setFormErrors(validate(formValues));
            setIsSubmit(true);
        try {
            const body = {email, password}
            const res = await fetch (`http://localhost:5000/auth/login`,{
                method : 'POST',
                headers : { 'Content-Type': 'application/json'},
                body : JSON.stringify(body)
            })
            const parseRes = await res.json()
            console.log(parseRes)
            if(!parseRes?.jwtToken){
              // history.replace('/login');
              return window.alert('Enter valid credentials');
            }else{
            localStorage.setItem('token', parseRes?.jwtToken);
            localStorage.setItem('role',parseRes?.role)
            localStorage.setItem('email',parseRes?.email)
            localStorage.setItem('name',parseRes?.name)
            localStorage.setItem('mobile',parseRes?.mobile)

            const role = localStorage.getItem('role',parseRes?.role)
            if(role === 'admin'){
              history.push('/dashboard')
            }else{
              history.push('/home')
            }
              setAuth(true)
            }
            
            // history.push('/home')
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);

      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Please Enter Your Email";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Please Enter Your Password";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };
  return (
    <>
        <div className="auth-wrapper">
        <div className="auth-inner">
    <h1 className='text-center'>Login</h1>
    
    <form onSubmit={onSubmitvalues}>
    <div className='form-group'>
    <input 
        type='email' 
        name='email'
        placeholder='Email' 
        className='form-control my-3'
        value={formValues.email}
        onChange = {(e) =>onChange(e)}
        />
        <p>{formErrors.email}</p>
      </div>

        <div className='wrapper'>
          <div className='input-field'>
        <input 
        type='password' 
        name='password' 
        placeholder='Password' 
        className='form-control my-3'
        value={formValues.password}
        onChange = {(e) =>onChange(e)}
        // onClick = {handleToggle}
        />
        {/* <span><Icon icon={icon}/></span> */}
        <p>{formErrors.passowrd}</p>

        <p style={{marginLeft:'180px',fontSize: '13px'}}>Not registerd yet? <Link to = '/register'>Register</Link></p>
        </div>
        </div>
        <button className='btn btn-success btn-block'>Submit</button>
    </form>
    {/* <button onClick={() => setAuth(true)}>Authenticate</button> */}
    </div>
    </div>
    {/* <AdminNav /> */}
    </>
  )
}
export default Login