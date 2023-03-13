import React from 'react';
import spotify from "../styles/img/spotify.png";
import "../styles/Login.css"
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '../var';

function LoginScreen() {
  return (
    <div className='loginPage'>
        <img src={spotify} alt="" className='Logo'/>
        <a className='loginBtn' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>;
        {/* <a href="{loginEndPoint}" className='loginBtn'>Log in</a> */}
    </div>
  )


}

export { LoginScreen }