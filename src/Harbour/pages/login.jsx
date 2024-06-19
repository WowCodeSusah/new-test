import React from 'react'
import FormField from '../components/FormField'
import { icons } from '../constants'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const submit = async () => {
    if (!form.email || !form.password) {
      alert('Error: Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);

    try {
      // backend await code here

      navigate('/xyzstorage');
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div className='bg-secondary min-h-screen'>
      <div className='w-full justify-center h-full px-4 py-6'>
        <p className="text-center text-4xl text-primary font-mmbold mt-4">
          Moringa 
        </p>
        
        <p className="text-3xl font-hnbold text-offwhite mt-20">
            Login
        </p>

        <FormField 
        otherStyles='mt-7'
        textStyles="bg-secondary flex-1 text-primary font-hnroman text-base"
        containerStyles='rounded-2xl px-4 bg-secondary border-2 border-primary'
        showIcon="True"
        icon={icons.xyzEmail}
        value={form.email}
        handleChangeText={(e) => setForm({ ...form, email: e.target.value})}
        placeholder="Email"
        type="text"
        />
        <FormField 
        title="Password"
        otherStyles='mt-7'
        textStyles="bg-secondary flex-1 text-primary font-hnroman text-base"
        containerStyles='rounded-2xl px-4 bg-secondary border-2 border-primary'
        showIcon="True"
        icon={icons.xyzPassword}
        value={form.password}
        handleChangeText={(e) => setForm({ ...form, password: e.target.value})}
        placeholder="Password"
        filter='green'
        />

        <div className='flex items-center'>
          <div className="mt-2 gap-2 ml-auto">
            <Link to='/' className="text-right text-xs text-offwhite font-hnmedium underline">Forgot password?</Link>
          </div>
        </div>

        <CustomButton 
        title="Login"
        containerStyles="min-h-62 mt-20 rounded-full w-full bg-primary"
        textStyles="text-secondary font-hnbold text-sm py-3"
        handlePress={submit}
        isLoading={isSubmitting}
        />


      </div>
    </div>
  )
}

export default Login