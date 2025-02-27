import React from "react";
import Login from "./auth/Login";
import Register from "./auth/Register";
import {auth} from "./fire";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/home";


function App() {

  const [user,setUser] = React.useState(null);
  const [authState,setAuthState] =  React.useState(null)

  React.useEffect(()=>{
    const unSubscribeAuth = onAuthStateChanged(auth,async authenticatedUser =>{
      if(authenticatedUser){
         setUser(authenticatedUser.email)
         setAuthState('home');
         
      }else {
        setUser(null);
        setAuthState('login')
      }
    })
    return unSubscribeAuth; 

  },[user]);

  if(authState === null) return <div className="font-bold text-center text-5xl">Loading...</div>
  if(authState === "login") return <Login setAuthState= {setAuthState} setUser={setUser} />
  if(authState === "register") return <Register setAuthState={setAuthState} setUser={setUser}/>
  if (authState === "home" && user) return <Home user={user} setAuthState={setAuthState} setUser={setUser} />;
    


  return (
    //  <Register setAuthState={setAuthState} setUser={setUser} />
    <Login setAuthState={setAuthState} setUser={setUser} />
  );
}

export default App;
