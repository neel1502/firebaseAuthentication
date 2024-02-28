import React,{useState} from "react";
import { getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import { app } from "../firebase"

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();
function Signup(){
    const[email,setEmail]=useState("");
    const[password,setaPassword]=useState("")
    const createUser=()=>{
      createUserWithEmailAndPassword(auth,email,password)
      .then(value =>alert("Success"))      
    }
    const signupWithGoogle=()=>{
        signInWithPopup(auth,googleProvider)
    }
    return(
        <div className="signup-page">
            <h1>Signup Page</h1>
            <label>Email:</label>
            <input onChange={e=>setEmail(e.target.value)} value={email} type="email" required placeholder="enter your email"></input><br /><br />
            <label>Password:</label>
            <input onChange={e=>setaPassword(e.target.value)} value={password} type="password" required placeholder="enter your passwprd"></input><br /><br />
            <button onClick={signupWithGoogle}>Signin with google</button>
            <button onClick={createUser}>Sign Up</button>
        </div>
    )
}
export default Signup;