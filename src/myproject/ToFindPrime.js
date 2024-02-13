import React, { useState } from 'react'

const ToFindPrime = () => {
  
  const[inputValue,setInputvalue] = useState([])
  const[resultValue,setResultvalue] = useState([0])
  
const handleSubmit =(e)=>{
e.preventDefault();

if(inputValue == "1"){
    setResultvalue(`${inputValue} => it is composite value `)
}
else if(inputValue < 1){
    setResultvalue(`${inputValue} => it is invalid value`)
}
else{
    for(let i=2;i<inputValue;i++){
        if(inputValue%i === 0){
            var result = `${inputValue} => it is not a prime number`
        break;
        }
    else{
        var result = `${inputValue} => It is a prime`
    }
    }
}
setResultvalue(result)
setInputvalue("")
}


  
    return (
    <div className='container d-flex justify-content-center vh-100 bg-primary bg-gradient shadow rounded'>
  <form onSubmit={handleSubmit} class="d-column mt-5 ">
    <h1 for="number" class="shadow rounded p-2 text-white fw-bold col-12">To Find Prime</h1>
    <input type='number' placeholder='enter a number' value={inputValue} onChange={(e)=>setInputvalue(e.target.value)} class="mt-4 col-8 shadow text-center"/>
    <button type='submit' class="shadow rounded mt-4 mx-2 col-3 btn-dark text-white fw-bold">submit</button>
    <p class="mt-4 fw-bold rounded shadow p-2 fs-6">Result is : <span class="text-white  p-2">{resultValue}</span></p>
    </form>    
    </div>
  )
}

export default ToFindPrime
