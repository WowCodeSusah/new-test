import { useState } from 'react'
import '../css/LoginPageMobile.css'
import ButtonInputMobile from './ButtonInputMobile.jsx'
import PasswordInputMobile from './PasswordInputMobile.jsx'
import TextInputMobile from './TextInputMobile.jsx'
import axios from 'axios'

function LoginPrimaryMobile() {
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
                                location.reload()
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

    function onSubmit () {
      loginUser(name, password)
    }
  return (
    <div className='LoginPrimaryCase'>
        <form className='LoginPrimaryMobileForm'>
            <p className='LoginPageMobileTitle'>Login</p>
            <TextInputMobile label={'Email'} setData={setName}/>
            <PasswordInputMobile label={'Password'} setData={setPassword}/>
            <p className='LoginPageMobileSubText'>Forgot Password?</p>
            <ButtonInputMobile label={"Login"} submit={onSubmit}/>
        </form>
    </div>
  )
}

export default LoginPrimaryMobile