import React from "react";
import {useForm} from "react-hook-form"

export default function Contact() {
const {register,handleSubmit, formState: { errors }}= useForm();
const onSubmit = (data)=>{
  console.log(data);
}

  return (
    
       <div className="container">
        <form onSubmit = {handleSubmit(onSubmit)}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              {...register('Email',{required : true})}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              {...register('Password',{required : true})}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          {errors.message && errors.message.message}
         <input type="submit"></input>
        </form>
    </div>
  );
}
