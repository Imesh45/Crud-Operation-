import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const Ncr_detail=()=>{

const { id }=useParams();

 const[ncrdetails,SetNcrDetails]=useState({});
    useEffect(()=>{
        fetch("http://localhost:8080/Audit_detail/"+ id).then(res=>{
           return res.json();
        }).then(res=>{
            SetNcrDetails(res);
            console.log(res)
      })
        },[id])
  return (
  
    <div>
      hhhhhhhhh
       
        <ul>
        
          <li>{ncrdetails.auditno}</li>
          <li>{ncrdetails.company}</li>
          <li>{ncrdetails.department}</li>
          <li>{ncrdetails.audittype}</li>
          <li>{ncrdetails.ncrtype1}</li>
          <li>{ncrdetails.qsoreqno}</li>
          <li>{ncrdetails.qapsopwi}</li>
          <li>{ncrdetails.auditdate}</li>
          <li>{ncrdetails.auditor}</li>
          <li>{ncrdetails.responsibleperson}</li>
          <li>{ncrdetails.ncrtype2}</li>
          <li>{ncrdetails.evidence}</li>
          <li>{ncrdetails.nonconformity}</li>
          <li>{ncrdetails.correction}</li>
          <li>{ncrdetails.ncrcategory}</li>
          <li>{ncrdetails.rootcause}</li>
          <li>{ncrdetails.correctionaction}</li>
          <li>{ncrdetails.agreedcompletedate}</li>
        </ul>
        

    </div>
  )
}

export default Ncr_detail
