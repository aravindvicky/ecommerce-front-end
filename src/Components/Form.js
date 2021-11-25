import React, { useState } from 'react';
import Input from '../helper.js/Input';
import Select from '../helper.js/Select';


const Form = () => {
    const [values,setValues] = useState({})
    const options = ['c','c++','java','python','.net'];
    const submitFormHandler = (e)=>{
        e.preventDefault();
        console.log(values)
    }
    const handleChange = (event) => {

        let name = event.target.name;
        let val = event.target.value;

        setValues({
            ...values,
            [name]:val,
        })

    }

    return (
        <div>
            <form method="post"  onSubmit={submitFormHandler}>
               
                <h4>create an account</h4>
                <Input name="first_name" label="First Name"  type="text" required={true} handler={handleChange} />
                <Input name="middle_name" label="Middle Name" type="text" required={false} handler={handleChange}/>
                <Input name="last_name" label="Last Name" type="text" handler={handleChange}/>
                <Input name="date of birth" label="Date of birth" type="date" handler = {handleChange} />
                <Input name="Email id" label="Enter A Email Id" placeholder="example@gmail.com" type="email" handler = {handleChange} />

            
                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )
}

export default Form







































































 {/* <Select name="courses" options={options} label="Courses" handler={handleChange}/>
                <Select name="courses" options={options} label="Courses" handler={handleChange}/>
                <Select name="courses" options={options} label="Courses" handler={handleChange}/>
                <Select name="courses" options={options} label="Courses" handler={handleChange}/> */}