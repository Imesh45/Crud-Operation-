import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import './Ncr_create.css'

const Ncr_create = () => {
    
    const[auditno,SetAuditno]=useState();
    const[company,SetCompany]=useState(); 
    const[departman,SetDepartment]=useState();
    const[audittype,SetAudittype]=useState();
    const[ncrtype1,SetNcrType1]=useState();
    const[qsoreqno,SetQsoReqno]=useState();
    const[qapsopwi,SetQapSopWi]=useState();
    const[auditdate,SetAuditDate]=useState();
    const[auditor,SetAudior]=useState();
    const[responsibleperson,SetResponsiblePerson]=useState();
    const[ncrtype2,SetNcrType2]=useState();
    const[evidence,SetEvidence]=useState();
    const[nonconformity,SetNonConformity]=useState();
    const[ncrcategory,SetNcrCategory]=useState();
    const[correction,SetCorrection]=useState();
    const[rootcause,SetRootCause]=useState();
    const[correctionaction,SetCorretionAction]=useState();
    const[agreedcompletedate,SetAgreedCompleteDate]=useState();


    const handlesubmit=(e)=>{
     e.preventDefault()
     const data={auditno,company,departman,audittype,ncrtype1,qsoreqno,qapsopwi,auditdate,auditor,responsibleperson,ncrtype2,evidence,nonconformity,correction,ncrcategory,rootcause,correctionaction,agreedcompletedate}
     console.log(data)

    }

  return (
    < >
        <Navbar/>
      <form onSubmit={handlesubmit}>
        <div className='admin'>
          <div className='row'>
            <div class="form-floating col-4">
              <select class='form-select' id='floatingSelect' aria-label='Floating label select example'  onChange={(e)=>SetAuditno(e.target.value)} value={auditno}>
                 <option>1</option>
                 <option>1</option>
              </select>
              <label for='floatingSelect'>Audit Number</label>
            </div>
            <div class="form-floating col-4">
              <select class='form-select' id='floatingSelect' aria-label='Floating label select example'  onChange={(e)=>SetCompany(e.target.value)} value={company}>
                 <option>1</option>
                 <option>1</option>
              </select>
              <label for='floatingSelect'>Company</label>
            </div>
            <div class="form-floating col-4">
              <select class='form-select' id='floatingSelect' aria-label='Floating label select example'  onChange={(e)=>SetDepartment(e.target.value)} value={departman}>
                 <option>1</option>
                 <option>1</option>
              </select>
              <label for='floatingSelect'>Department</label>
            </div>
            <div class="form-floating col-4">
              <select class='form-select' id='floatingSelect' aria-label='Floating label select example'  onChange={(e)=>SetAudittype(e.target.value)} value={audittype}>
                 <option>1</option>
                 <option>1</option>
              </select>
              <label for='floatingSelect'>Audit Type</label>
            </div>
            <div class="form-floating col-4">
              <select class='form-select' id='floatingSelect' aria-label='Floating label select example'  onChange={(e)=>SetNcrType1(e.target.value)} value={ncrtype1}>
                 <option>1</option>
                 <option>1</option>
              </select>
              <label for='floatingSelect'>Ncr Type</label>
            </div>
            <div class="form-floating col-4">
              <select class='form-select' id='floatingSelect' aria-label='Floating label select example'  onChange={(e)=>SetQsoReqno(e.target.value)} value={qsoreqno}>
                 <option>1</option>
                 <option>1</option>
              </select>
              <label for='floatingSelect'>Qso Req no</label>
            </div>
            <div class="form-floating col-4">
              <select class='form-select' id='floatingSelect' aria-label='Floating label select example'  onChange={(e)=>SetQapSopWi(e.target.value)} value={qapsopwi}>
                 <option>1</option>
                 <option>1</option>
              </select>
              <label for='floatingSelect'>Qso Req no</label>
            </div>
            
          <div  className='form-floating col-4'>
         
          <input class='form-control' id='floatingInput' type='text' onChange={(e)=>SetAudior(e.target.value)} value={auditor}/>
          <label  for='floatingInputValue'>Auditor</label>
          </div>
          <div  className=' form-floating col-4'>
         
          <input class='form-control' id='floatingInput' type='date' onChange={(e)=>SetAuditDate(e.target.value)} value={auditdate} />
          <label for='floatingInputValue'>Audit Date</label>
          </div>
          </div>
        
        
        </div>
        <div className='row'>
        <div className='auditor col-6'>
             <div className='form-floating '>
             <textarea type='text' class='form-control'   placeholder='Leave acomment here' onChange={(e)=>SetNonConformity(e.target.value)} value={nonconformity} id="nonconformity" />
             <label for='floatingSelect'>Non-Conformity</label>
             </div>
             <div className='form-floating '>
             <select class='form-control'   placeholder='Leave acomment here'  onChange={(e)=>SetNcrType2(e.target.value)} value={ncrtype2} id="ncrtype2" >
             <option>Observation</option>
             <option>NCR</option>
             </select>
             <label for='floatingSelect'>Ncr Type</label>
             </div>
             <div className='form-floating '>
             <select  class='form-control'   placeholder='Leave acomment here' onChange={(e)=>SetNcrCategory(e.target.value)} value={ncrcategory} id="ncrcategory" >
             <option>Major</option>
             <option>Mainor</option>
             </select>
             <label for='floatingSelect'>Ncr Category</label>
             </div>
             <div className='form-floating '>
             <input class='form-control'   placeholder='Leave acomment here'  type='text' onChange={(e)=>SetEvidence(e.target.value)} value={evidence} id="evidence" />
             <label for='floatingSelect'>Evidance</label>
             </div>
             <div className='form-floating '>
             <input class='form-control'   placeholder='Leave acomment here'  type='text' onChange={(e)=>SetResponsiblePerson(e.target.value)} value={responsibleperson} id="responsibleperson" /> 
             <label>Responsible Person</label>
             </div>
        
        </div>
       <div className='auditee col-6 '>
       
       <div class='form-floating' >
       <textarea class='form-control' placeholder='Leave acomment here' type='text' onChange={(e)=>SetCorrection(e.target.value)} value={correction} id="correction" ></textarea>
        <label for='floatingTextarea' >Correction</label>
       </div>
       <div className='form-floating '>
       <textarea  class='form-control'  placeholder='Leave acomment here' type='text' onChange={(e)=>SetRootCause(e.target.value)} value={rootcause} id="rootcause" />
       <label for='floatingSelect'>Root Cause</label>
       </div>
       <div className='form-floating '>
       <textarea  class='form-control' placeholder='Leave acomment here' type='text' onChange={(e)=>SetCorretionAction(e.target.value)} value={correctionaction} id="correctionaction" />
       <label for='floatingSelect'>Correction Action</label>
       </div>
       <div className='form-floating '>
       <input class='form-control'  placeholder='Leave acomment here' type='date' onChange={(e)=>SetAgreedCompleteDate(e.target.value)} value={agreedcompletedate} id="agreedcompletedate" />
       <label for='floatingSelect'>Agreed Complete Date</label>
       </div>
       </div>
        
          
        </div>
        
        <button className='primary'>Submit</button>
      </form>
      
    </>
  )
}

export default Ncr_create
