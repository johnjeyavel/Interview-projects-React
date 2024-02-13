import React, { useState } from 'react'

const DuplicateNumber = () => {

const[inputvalue,setInputvalue] = useState([])
const[resultvalue,setResultvalue] = useState([])

const handleSubmit = (e)=>{
e.preventDefault();

var a = inputvalue.split("")
var result = a.filter((v,i,arr)=>arr.indexOf(v) !== i)
setResultvalue(result.join(","))
setInputvalue("")
}

  return (
    <div className='container d-flex justify-content-center rounded bg-primary bg-gradient shadow vh-100'>
      <form onSubmit={handleSubmit} className='my-5'>
        <h1 className='text-white shadow fw-bold rounded p-2 my-3'>To Find Duplicate</h1>
    <input type='text' placeholder='Enter a number' value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} className='my-3 text-center shadow rounded col-12'/><br/>
    <button type='submit' className='btn-dark rounded text-white fw-bold shadow '>submit</button>
<p className='my-3 fw-bold '>The Duplicate value are : [ <span className='text-white'>{resultvalue}</span> ]</p>
      </form>
    </div>
  )
}

export default DuplicateNumber
