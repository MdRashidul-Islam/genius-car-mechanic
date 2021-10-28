import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged  } from "firebase/auth";
import { useEffect } from "react";
import {useState} from 'react'
import initAuth from '../Pages/Login/Firebase/firebase.init'

initAuth()

const useFirebase=()=>{
  const [user, setUsers] =useState({});
  const [isLoading, setIsLoading]= useState(true);

  const auth = getAuth();

  const signInGoogle=()=>{
    setIsLoading(true);
    const provider= new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    console.log(user);
    setUsers(user);
  
  })
  // .catch((error) => {
  //   const errorMessage = error.message;
  //  console.log(errorMessage);
  // });
  .finally(()=>setIsLoading(false));
  }


  useEffect(()=>{
   const unsubscribed= onAuthStateChanged(auth, user=>{
      if(user){
        setUsers(user)
      }
      else{
        setUsers({})
      }
      setIsLoading(false);
    })
    return ()=> unsubscribed;
  },[])




const logOut=()=>{
signOut(auth)
.then(() => {
  
 
})
.finally(()=>setIsLoading(false));
// .catch((error) => {
  
// });

}









  return{
    isLoading,
    signInGoogle,
    logOut,
    user,
  }
}

export default useFirebase;