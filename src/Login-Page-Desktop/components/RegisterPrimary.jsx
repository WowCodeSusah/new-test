/* eslint-disable no-unused-vars */
import { useState } from 'react'
import '../css/LoginPage.css'
import DateInput from './DateInput'
import DropDown from './DropDown'
import PasswordInput from './PasswordInput'
import RegisterText from './RegisterText'
import TextInput from './TextInput'
import axios from 'axios'

// eslint-disable-next-line react/prop-types
function RegisterPrimary({click, currentState}) {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [birthdate, setBirthDate] = useState('')
  const [password, setPassword] = useState('')
  const [passwordDetails, setPasswordDetails] = useState('')
  
  function makeEmail(name) {
    return name.replace(' ', '.') + "@gmail.com"
  }

  async function createUser(email, name, role, birthdate, password) {
    axios.post(`https://test-backend-k9s7.vercel.app/users/`, {
      "email": email,
      "password": password,
      "name": name,
      "role": role,
      "dateOfBirth": birthdate
    }, {withCredentials: true})
    .then(response => {
      console.log(response.data);
      location.reload()
    })
    .catch(error => {
      console.error('Error fetching session data:', error);
    });
  }

  function onSubmit (event) {
    event.preventDefault()
    createUser(makeEmail(name), name, role, birthdate, password)
  }

  return (
    <div>
      <form className='RegisterContainer' onSubmit={onSubmit}>
        <label className='TitleRegister'>Register</label>
        <TextInput label={"Fullname"} color={'green'} setData={setName}/>
        <DropDown label={"Role"} data={role} setData={setRole} />
        <DateInput color={'green'} setData={setBirthDate}/>
        <PasswordInput label={"Password"} color={'green'} setData={setPassword}/>
        <PasswordInput label={"Confirm Password"} color={'green'} setData={setPasswordDetails}/>
        <div className='RememberMe'>
          <label className='CheckText'>
            <input type='checkbox' className='TickBox'></input> I Agree To The Terms and Conditions
          </label>
        </div>
        <button type='submit' className='RegisterButton'>Register</button>
        <label className='ShowTextRegister'>{`Already have an account?`} <RegisterText handleClick={click} status={currentState} showText={'Login'}/></label>
      </form>
    </div>
  )
}

export default RegisterPrimary