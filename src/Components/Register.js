import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
const Register = ({setAuth}) => {

    const [inputs, setInputValues] = useState({
        email: '',
        password: '',
        name: ''
    })
    const { email, password, name } = inputs;
    const history = useHistory()

    const onChange = (e) => {
        e.preventDefault()
        setInputValues({
            ...inputs,
            [e.target.name]: e.target.value
            
        })
        // console.log(inputs)
    }
    const onSubmitvalues = async (e) =>{
        e.preventDefault()
        try {
            const body = {email, password, name}
            const res = await fetch (`http://localhost:5000/auth/register`,{
                method : 'POST',
                headers : {'Content-type':"application/json"},
                body: JSON.stringify(body)
            })
            const parseRes = await res.json()
            console.log(parseRes)
            localStorage.setItem('token', parseRes.jwtToken)
            localStorage.setItem('role', parseRes.role)
            console.log(parseRes)
            setAuth(false)
            history.push('/login')
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <>
       <div className="auth-wrapper">
        <div className="auth-inner">
            <h1 className='text-center my-5'>Register</h1>
            <form onSubmit={onSubmitvalues}>
                <input type='text' name='name' placeholder='Name' className='form-control my-3'  value={name} onChange={e =>onChange(e)}/> 
                <input type='email' name='email' placeholder='Email' className='form-control my-3' value={email} onChange={e =>onChange(e)} />
                <input type='password' name='password' placeholder='Password' className='form-control my-3' value={password} onChange={e =>onChange(e)} />
                <p style={{marginLeft:'180px',fontSize: '13px'}}>Already registerd? <Link to = '/login'>Login</Link></p>
                <button className='btn btn-success btn-block'>Submit</button>
            </form>
            </div>
            </div>
        </>
    )
}
export default Register