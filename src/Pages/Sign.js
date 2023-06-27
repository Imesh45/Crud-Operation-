import React from 'react'
import './Sign.css'
import { useState } from 'react'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const Sign = () => {

const[username,SetUserName]=useState('');
const[password,SetPassword]=useState('');

const navigate=useNavigate();

const handlesubmit=(e)=>{
          e.preventDefault();
          if(validate()){
          
            fetch("http://localhost:8080/user/"+username).then((res)=>{
              return res.json();           
            }).then((resp)=>{
              console.log(resp)
              if(Object.keys(resp).length === 0){
                  console.log('ggg')
              }else{
                 if(resp.password === password)
                  navigate('/home')
              }
            }).catch((err)=>{
              Swal.fire({
                icon: 'Please',
                title: 'warning4',
                text: `Login Failed  ok`,
                showConfirmButton: false,
                timer: 1500,
              });
            })
          }
}

const validate=()=>{
  let result=true;
  if(username ===''||username===null){
     result=false;
     Swal.fire({
      icon: 'Please',
      title: 'Warning1',
      text: `Please Enter Email`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  if(password ===''|| password===null){
  result=false;
  Swal.fire({
    icon: 'Please',
    title: 'Warning2',
    text: `Please Enter Password`,
    showConfirmButton: false,
    timer: 1500,
  });
}
 return result;

}


  return (
       <div className="text-center">
        <main className="form-signin w-100 m-auto">
    <form onSubmit={handlesubmit}>
      
      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
  
      <div className="form-floating">
        <input   className="form-control" id="floatingInput" placeholder="text" value={username} onChange={(e)=>SetUserName(e.target.value)}/>
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

export default Sign
