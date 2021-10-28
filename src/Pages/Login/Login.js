import React from 'react';
import useAuth from '../../hooks/useAuth';


const Login = () => {
  const {signInGoogle}= useAuth();
  return (
    <div>
      <h2>Please Login</h2>
      <button onClick={signInGoogle}>sign in with google</button>
    </div>
  );
};

export default Login;