import React, { useState } from "react";
import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"

const auth=getAuth(app)
function SigninPage(){
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("")
    const signinUser=()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then(value =>console.log('signin Success'))
        .catch(err=>console.log(err));
    }
   return(
    <div className="signin-page">
    <h1> Signin Page</h1>
      <label>Enter Your Email:</label>
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter Your Enail"></input><br /><br />
      <label>Enter Your Password:</label>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder="Enter Your Password"></input><br /><br />
      <button onClick={signinUser}>Sign me in</button>
    </div>
   )
}
export default SigninPage;