import React from 'react';
import { Button } from '@material-ui/core';
import Logo from '../images/Whatsapp_37229.png';
import { auth, provider } from '../firebase';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';
import '../css/Login.css';

const Login = () => {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img src={Logo} alt='Whatsapp Logo' />
        <div className='login__text'>
          <h1>Sign in to WhatsApp Clone</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
