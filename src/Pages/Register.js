import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';

const Register = () => {


    const[username,SetUserName]=useState('');
const[password,SetPassword]=useState('');


const handlesubmit=(e)=>{ e.preventDefault()
    const data={username,password}
    console.log(data)


   fetch('http://localhost:4000/user',{
     method:"POST",
     headers:{"content-type":"application/json"},
     body:JSON.stringify(data)
   }).then(res=>{
   console.log(res)
   Swal.fire({
     icon: 'success',
     title: 'Added!',
     text: ` data has been Added.`,
     showConfirmButton: false,
     timer: 1500,
   });
   
   }).catch(err=>{
     console.log(err)
   })
    

   }
  return (
    <div className="text-center">
    <main className="form-signin w-100 m-auto">
<form onSubmit={handlesubmit}>
  
  <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

  <div className="form-floating">
    <input type='text'  className="form-control" id="floatingInput" placeholder="text" value={username} onChange={(e)=>SetUserName(e.target.value)}/>
    <label for="floatingInput">Email address</label>
  </div>
  <div className="form-floating">
    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(e)=>SetPassword(e.target.value)}/>
    <label for="floatingPassword">Password</label>
  </div>

  
  <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
</form>
</main>
   </div>
  )
}

export default Register
