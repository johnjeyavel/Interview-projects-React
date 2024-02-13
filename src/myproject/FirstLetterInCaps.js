import React, { useState } from 'react'


const Home1 = () => {

const[inputvalue,setInputvalue] = useState([])
const[mapvalue,setMapvalue] = useState([])


const handleSubmit = (e)=>{
e.preventDefault();

var result = inputvalue.split(" ")
var value = result.map((val)=>{
  return val.charAt(0).toUpperCase()+val.slice(1)
})
var fresult = value.join(" ")

setMapvalue([...mapvalue,fresult]);
setInputvalue("");
}


  return (
    <div class="container d-flex justify-content-center vh-100 rounded bg-primary bg-gradient shadow">
      <form onSubmit={handleSubmit}  class="d-column mt-5">
        <label for="name" class="fw-bold p-2 rounded text-white fs-2 shadow mt-2 ">First Letter In Caps</label>
        <div class=" d-flex">
        <input type='text' placeholder='Enter a text' value={inputvalue}
        onChange={(e)=>setInputvalue(e.target.value)} class=" d-flex mt-3 rounded p-2 col-8 mt-5 shadow text-center" required/>
        <button type='submit' class="btn-dark mx-1 mt-5 rounded shadow col-4 fw-bold">submit</button></div>
        <ul class="d-column mt-4 fw-bolder  text-dark ">
    {mapvalue.map((item, index) =>(
        <li key={index} class="mb-3"><span class="text-white mx-3 fw-bold">{item}</span></li>
    ))}
 </ul> 

      </form>

      {/* <div class="table-responsive">
        <table
            class="table table-primary">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>name</th>
                </tr>
            </thead>
            <tbody>
             {
             mapvalue.map((value,i)=>(
   <tr>
    <td>{i}</td>
   <td>{value}</td>
                </tr>
                    ))}
            </tbody>            
        </table>
      </div> */}
    </div>
  )
}

export default Home1 
