import React, { useState } from 'react'
import { icons } from '../constants'
import FormField from '../components/FormField';
import LanguageDropDown from '../components/LanguageDropdown'
import CustomButton from '../components/CustomButton';
import { useSpring, animated } from '@react-spring/web';

function Settings({ togglePage, pages }) {

  const spring = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })
  
  const spring2 = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: 100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })  

  const [settings, setSettings] = useState({
    language: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    togglePage(1, 0);
    setIsSubmitting(false);
  };

  const [isSaving, setIsSaving] = useState(false);

  const save = async () => {
    if (!settings.password) {
      alert('Error: Please fill in all fields');
      return;
    }
    
    setIsSaving(true);

    try {
      // backend await code here

      togglePage(1,0);
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className='min-h-screen overflow-y-scroll bg-offwhite-400'>
      <img 
        src={icons.xyzBack}
        alt="Back"
        className={`absolute mt-5 ml-4 w-7 h-7 ${isSubmitting && 'opacity-50'}`}
        style={{ objectFit: 'contain'}}
        onClick={submit}
      />

      <animated.div style={{...spring}} className='px-4 pt-4 flex w-full h-12 justify-center items-center'>
        <p className='text-md text-secondary font-hnbold'>
          Settings
        </p>
      </animated.div>

      <div className='mt-3 px-5 w-full flex flex-col items-center justify-center'>
        <LanguageDropDown />

        <p className='mr-auto mt-6 text-secondary text-sm font-hnmedium'>Change Password</p>

        <FormField 
        title='Current Password'
        showTitle='true'
        titleStyles='font-hnroman text-secondary'
        otherStyles='mt-2 w-full'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        />

        <FormField 
        title='New Password'
        placeholder='Enter New Password'
        showTitle='true'
        titleStyles='font-hnroman text-secondary'
        otherStyles='mt-3 w-full'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        />

        <FormField 
        title='Repeat New Password'
        placeholder='Repeat New Password'
        showTitle='true'
        titleStyles='font-hnroman text-secondary'
        otherStyles='mt-3 w-full'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        />

        <animated.div style={{...spring2}} className='mt-10 mb-6 flex h-12 w-[90vw] items-center justify-center'>
          <CustomButton 
            containerStyles='h-12 w-[60vw] mr-2 bg-offwhite-400 rounded-3xl border border-secondary'
            title='Cancel'
            textStyles='text-secondary text-sm font-hnmedium'
            handlePress={submit}
            isLoading={isSubmitting}
          />

          <CustomButton 
            containerStyles='h-12 w-full bg-secondary rounded-3xl'
            title='Save'
            textStyles='text-offwhite text-sm font-hnmedium'
            handlePress={save}
            isLoading={isSaving}
          />

        </animated.div>
      </div>
    </div>
  )
}

export default Settings