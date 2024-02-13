import React, { useState } from 'react'

const PrimeNumber = () => {

    const[inputValue,setInputvalue] = useState([])
    const[resultValue,setResultvalue] = useState([0])

const handleSubmit = (e)=>{
    e.preventDefault()
    setInputvalue("")
    var result = [];

      for(let i=1;i<=inputValue;i++){
    var b = 0;
    for(let j=1;j<=inputValue;j++){
        if(i%j === 0){
            b = b+1;
        }
    }
if(b==2){
    // window.location.reload()
    // document.write(i+"<br/>")
    // alert(i)
    // console.log(i);
    result.push(i+",")
}
}
setResultvalue(result)
}


  return (
    <>
    <div className='d-flex justify-content-center vh-100 bg-primary bg-gradient shadow rounded '>
      <form onSubmit={handleSubmit} class="d-column mt-5 ">
        <h1 class="fw-bold p-2 rounded text-white fs-2 shadow mt-3 col-12 ">Prime Number</h1>
        <input type='number' placeholder='Enter a number' value={inputValue} onChange={(e)=>setInputvalue(e.target.value)} required class="p-2 shadow mt-4 col-8 text-center"/><br/>
        <button type='submit' class="mt-4 col-4 btn-dark text-white shadow fw-bold">submit</button> </form><br/>
        
        <div class="position-absolute top-50 start-40 translate-middle-y text-break mx-5">
        <h5 class="fw-bold">prime numbers are : </h5>
        <p class="text-white fw-bold">[{resultValue}]</p>
</div>

        {/* <ul>
             {
            resultValue.map((item,i)=>(
                <li key={i}>{item}</li>
            ))
        }
        </ul> */}
     
    </div>
    </>
  )
}

export default PrimeNumber
