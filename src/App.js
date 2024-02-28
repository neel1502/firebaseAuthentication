import { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth"
import { app } from './firebase'
// import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup'
import SigninPage from "./pages/signin";

const auth = getAuth(app);
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      else {
        console.log("you are logged out");
        setUser(null);
      }
    })
  }, []);

  // const SignupUser = () => {
  //   createUserWithEmailAndPassword
  //     (auth, "nilljasani@gmail.com", "Neel@123"
  //     ).then((value)=> console.log(value))
  // }
  if (user === null) {
    return (
      <div className="App">
        <Signup />
        <SigninPage />
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Hello {user.email}</h1>
      <button onClick={()=>signOut(auth)}>Logout</button>
      <Signup />
      <SigninPage />
    </div>
  );
}

export default App;
