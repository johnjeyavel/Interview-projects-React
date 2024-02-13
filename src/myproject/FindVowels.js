import React, { useState } from 'react'

const FindVowels = () => {

const[inputvalue,setInputvalue] = useState([])
const[countvalue,setCountvalue] = useState([0])

const handleSubmit = (e)=>{
    e.preventDefault();

var Vowels = ["a","e","i","o","u"]
let count = 0;
for(let letter of inputvalue){
  if(Vowels.includes(letter)){
     count++;
  }
}
    setCountvalue(count);
    setInputvalue("");
    // setCountvalue("");
}

  return (
    <div class="container d-flex justify-content-center bg-primary bg-gradient shadow vh-100 rounded">
<form onSubmit={handleSubmit} class="d-column my-5">
<label class="mt-3 text-white shadow rounded fw-bold fs-2 p-2 col-12">To Count Vowels</label>
<input type='text' placeholder='Enter a text' value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)} required class="d-flex my-4 rounded shadow col-12 text-center"/>
<button type='submit' class="d-flex my-4  mx-5 shadow btn-dark text-white fw-bold ">How much vowel is there ?</button>
 
<div class="d-flex mt-3 shadow rounded p-3 fw-bolder">Total vowels count is :<span class="text-white mx-2 fw-bold" >[ {countvalue} ]</span></div></form>  
{/* {
    resultvalue.map((item,index)=>(
        <li key={index}>{item}</li>
    ))
}*/}

    </div>
  )
}

export default FindVowels
