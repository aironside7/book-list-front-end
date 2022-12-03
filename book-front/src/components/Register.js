import React from 'react'
import { useState } from 'react'
// import { useNavigate } from "react-router-dom";
const Register = () => {
   const [inputs,setInputs]=useState({
    username:"",
    password:"",
    cpassword:""
   })
//    const navigate =useNavigate
   const userSub=(event)=>{
       setInputs((arr)=>{
        return {...arr,[event.target.name] : event.target.value}
       })
   }
   const onSubmitt=(event)=>{
      event.preventDefault()
      if(inputs.username && inputs.password){
        fetch("https://book-cr7.onrender.com/resister",{
            method:"POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify({
                username:inputs.username,
                password:inputs.password
            })
        })
        // .then((res)=>{
        //     if(res.messege==="success"){
        //         window.alert("login successfull")
        //     }
        // }).catch((err)=>{
        //     console.log(err)
        // })
      }
   }
  return (
    <div>
        <div><h1>member-login</h1>
        {/* <from  onSubmit={} > */}
            <form onSubmit={onSubmitt}>
            <div>
            <input
            type="text"
            placeholder='username'
            name='username'
            value={inputs.username}
            onChange={userSub}
            />
         </div>
         <div>
            <input
            type="text"
            placeholder='password'
            name='password'
            value={inputs.password}
            onChange={userSub}
            />
         </div>
         <div>
            <input
            type="text"
            placeholder='confrom password'
            name='cpassword'
            value={inputs.cpassword}
            onChange={userSub}
            />
         </div>
         <button type='button'
        //  onClick={(event)=>{navigate("/login")}}
         >
        LOGIN
         </button>
            </form>
         
         
         
            
        {/* </from> */}
        
        
        </div>
      

    </div>
  )
}

export default Register
