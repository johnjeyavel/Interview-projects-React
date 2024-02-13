import React, { useState } from 'react'

const Table = () => {
    const[inputvalue,setInputvalue]=useState([])
    const[resultvalue,setResultvalue]=useState([])


    const handleSubmit = (e)=>{
e.preventDefault();
setInputvalue("")
var resultarr = []
const result = ()=>{
    for(let i=1;i<=10;i++){
    var temp = i*inputvalue
    resultarr.push(`${i} * ${inputvalue} = ${temp}`)
    resultarr.push(<br/>)
}}
result(inputvalue)
setResultvalue(resultarr)
    }

  return (
    <div className='container d-flex justify-content-center vh-100 bg-primary bg-gradient shadow rounded '>
          <form onSubmit={handleSubmit} className='d-column mt-5'>
      <h1 className='fw-bold p-2 rounded text-white fs-2 shadow mt-3 col-12 '>Print Table</h1>
        <input type='number' value={inputvalue} placeholder='Enter a number' onChange={(e)=>setInputvalue(e.target.value)} class="p-2 shadow mt-4 col-10 text-center"/>
        <button type='submit' class="mt-4 col-4 btn-dark text-white shadow fw-bold">submit</button>
        <div className=' fw-bold my-3'>
          <label className='col-10 rounded'>Given Table Values are :</label>
          <p class="text-white mx-5 my-2">{resultvalue}</p>
        </div>
      </form>
  
    </div>
  )
}

export default Table
