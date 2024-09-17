import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../fire";

const Home = ({ user, setAuthState, setUser }) => {
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState("login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" flex flex-col items-center text-5xl font-bold text-center m-44">
    Welcome to Home Page
     <div className="m-16">
     Username: {user}
     </div>
      <div className="items-center ">
      <button
      onClick={signOutHandler} 
      className="bg-violet-500 text-white text-lg font-bold px-12 py-4 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out ">
        Sign Out
      </button>
      </div>
    </div>
  );
};

export default Home;
