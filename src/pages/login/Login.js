import React, {useState} from 'react';
import {Button} from '../../styles/shared/Button';
import loginApi from '../../utils/api';
import {
  InputDiv,
  LoginContainer,
  LoginHR,
  LoginInput,
  GoogleSignIn,
  GoogleImageDiv,
  GoogleImage,
} from './Login.styles';

const Login = () => {
  const [values, setValues] = useState({username: '', password: ''});
  const {username, password} = values;
  const handleLogin = () => {
    loginApi(username, password)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <LoginContainer>
      <h1>Welcome to the WizeStore!</h1>
      <InputDiv>
        <label htmlFor='uname'>
          <b>Username</b>
        </label>
        <LoginInput
          type='text'
          placeholder='Enter Username'
          name='uname'
          onChange={(e) => setValues({...values, username: e.target.value})}
          required
        />
        <label htmlFor='psw'>
          <b>Password</b>
        </label>
        <LoginInput
          type='password'
          placeholder='Enter Password'
          onChange={(e) => setValues({...values, password: e.target.value})}
          name='psw'
          required
        />
        <Button onClick={() => handleLogin()}>Login</Button>
        {/* <label>
          <input type='checkbox' checked='checked' name='remember' /> Remember
          me
        </label> */}
      </InputDiv>
      <LoginHR />
      <GoogleSignIn>
        <GoogleImageDiv>
          <GoogleImage src='google_g_logo.png' alt='Google logo' />
        </GoogleImageDiv>
        Sign in with Google
      </GoogleSignIn>
    </LoginContainer>
  );
};
export default Login;
