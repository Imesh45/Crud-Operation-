import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Components/Navbar'
import './Audit_number.css'

const Audit_number = () => {


const [year,SetYear]=useState();
const [company,SetCompany]=useState();
const [department,SetDepartment]=useState();
const [randomvalue,SetRandomValue]=useState();



const [options,setOptions]=useState([]);



useEffect(()=>{
   fetch('http://localhost:7000/Company_Department').then(res=>{
      return res.json();
   }).then(data=>{
       setOptions(data);

   }
   )
   },[])
 

const handleNumberSubmit=(e)=>{
  e.preventDefault()
  const number= year+'-'+company+'-'+department+'-'+randomvalue
  console.log(number)
  alert(number +"Create");

 }
  return (
    <div>
      <Navbar/>
      <div  className='Audit-Number'>
      <form onSubmit={handleNumberSubmit}>
        <div className='create row'>
        <div  className='form-floating col-3'>
         <input class='form-control' id='floatingInput' type='text' onChange={(e)=>SetYear(e.target.value)} value={year}/>
         <label  for='floatingInputValue'>Year</label>
        </div>
        <div class="form-floating col-3">
        <select class='form-select' id='floatingSelect' aria-label='Floating label select example'  onChange={(e)=>SetCompany(e.target.value)} value={company} >
      {options.map((options)=>(
        <option key={options.id} value={options.Company} >
            {options.Company}
        </option>))}
        </select>
        <label  for='floatingInputValue'>Company</label>
        </div>
        <div class="form-floating col-3">
        <select class='form-select' id='floatingSelect' aria-label='Floating label select example'  onChange={(e)=>SetDepartment(e.target.value)} value={department} >
      {options.map((options)=>(
        <option key={options.id} value={options.Department} >
            {options.Department}
        </option>))}
        </select>
        <label  for='floatingInputValue'>Department</label>
        </div>
        <div  className=' form-floating  col-3'>
         <input class='form-control' id='floatingInput' type='text' onChange={(e)=>SetRandomValue(e.target.value)} value={randomvalue} />
         <label for='floatingInputValue'>Number</label>
         </div> 
          </div>
           <h1 className='number'>{year}-{company}-{department}-{randomvalue}</h1>
           
        <button>Create</button>
       
       
      </form>
      </div>
    </div>
  )
}

export default Audit_number
