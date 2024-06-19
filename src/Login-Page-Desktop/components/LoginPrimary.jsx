/* eslint-disable no-unused-vars */
import '../css/LoginPage.css'
import RegisterText from './RegisterText'
import PasswordInput from './PasswordInput'
import TextInput from './TextInput'
import axios from 'axios'
import { useState } from 'react'
// import TextInput from './TextInput'

// eslint-disable-next-line react/prop-types
function LoginPrimary({click, currentState}) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  async function loginUser(email, password) {
    axios.post(`https://test-backend-k9s7.vercel.app/logins/`, {
      "email": email,
      "password": password,
    }, {withCredentials: true})
    .then(response => {
              var saved = response
              axios.post(`https://test-backend-k9s7.vercel.app/users/email/`, {"email": email}, {withCredentials: true})
              .then(response => {
                var status = response.data['user']['pending']
                          if (status == false) {
                            axios.post(`https://test-backend-k9s7.vercel.app/create_session/${saved.data['User has been auth']}`, {}, {withCredentials: true})
                            .then(response => {
                              console.log(response.data);
                            })
                            .catch(error => {
                              console.error('Error fetching session data:', error);
                            });
                          }
                        })
              .catch(error => {
                console.error('Error fetching session data:', error);
              });
            })
    .catch(error => {
      console.error('Error fetching session data:', error);
    });
  }

  function onSubmit (event) {
    event.preventDefault()
    loginUser(name, password)
  }

  return (
    <div>
      <form className='LoginContainer' onSubmit={onSubmit}>
        <label className='TitleLogin'>Login</label>
        <TextInput label={"Email / Username"} color={'#1976d2'} setData={setName}/>
        <PasswordInput label="Password" color={'#1976d2'} setData={setPassword}/>
        {/* <TextInput placeHolder={'Email / Username'} imgSRC={'src/assets/images/Emailcon.svg'} type={'Text'}/>
        <TextInput placeHolder={'Password'} imgSRC={'src/assets/images/LockIcon.svg'} type={"Password"}/> */}
        <div className='ExtraButtons'>
          <div className='RememberMe'>
            <label className='CheckText'>
              <input type='checkbox' className='TickBox'></input>Remember Me
            </label>
          </div>
          <div className='ForgotPassword'>Forgot Password?</div>
        </div>
        <button type='submit' className='LoginButton'>Login</button>
        <label className='ShowTextLogin'>{`Don't have an account?`} <RegisterText handleClick={click} status={currentState} showText={'Register'}/></label>
      </form>
    </div>
  )
}

export default LoginPrimary