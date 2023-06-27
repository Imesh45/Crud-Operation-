import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate} from 'react-router-dom';
import "./Home.css"
import Swal from 'sweetalert2';

const Home = () => {



  const[detail,setDetail]=useState();
  const navigate=useNavigate()


  useEffect(()=>{
    fetch('http://localhost:8080/Audit_detail').then(res=>{
       return res.json();
    }).then(data=>{
        setDetail(data);
        console.log(data)
  })
    },[])

  const Loaddetail=(id)=>{
      navigate("/Ncr_detail/"+id);
      
  }
  const Loadedit=(id)=>{
    navigate("/Update/"+id)
  }
  const Loaddelete=(id)=>{
    if(Swal.fire({
       title:"Do you want to delete",
       showDenyButton:true,
       showCancelButton:false,
       confirmButtonText:'Yes',
       denyButtonText:'No'
    })){
      fetch('http://localhost:8000/Audit_detail/'+id,{
        method:"Delete"
      }).then(result=>{
        if(result.isConfirmed){
          Swal.fire("Saved!")
          window.location.reload()
          navigate("/ ")
        }
      
      
      }).catch(err=>{
        console.log(err)
      })
        

    }

  }

  return (
    <div className='home'>
      <Navbar/>
      <div className='homebody'>
       <div className='row'>
        <div className='container'>
      <table className='detail'>
        <tr>
          <th>Audit Number</th>
          <th>Company</th>
          <th>Department</th>
          <th>Auditor</th>
          <th>Audit Date</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
        
         {detail && detail.map((details)=>(
          <tr key={details.id}>
            <td>{details.auditno}</td>
            <td>{details.company}</td>
            <td>{details.departmant}</td>
            <td>{details.auditor}</td>
            <td>{details.auditdate}</td>
            <td> 
             <button onClick={()=>Loaddetail(details.id)}>Detail</button>
            </td>
            <td> 
             <button onClick={()=>Loadedit(details.id)}>Edit</button>
            </td>
            <td> 
             <button onClick={()=>Loaddelete(details.id)}>Delete</button>
            </td> 
          </tr>
          
         ))}
      
      </table>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Home
