import React from 'react'
import { icons, images } from '../constants'
import FormField from '../components/FormField'
import { useState } from 'react';
import Dropdown from '../components/Dropdown';
import MyDatePicker from '../components/MyDatePicker';
import CustomButton from '../components/CustomButton';
import { useSpring, animated } from '@react-spring/web';

function EditProfile({ togglePage, pages }) {

  const spring = useSpring({
    config: {
        tension: 170,
        friction: 60
    },
    from: { y: -100, opacity: 0 },
    to: { y: 0, opacity: 1 },
  })  

  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: 'Harbour Manager',
  })

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    setIsSubmitting(true);
    togglePage(1, 0);
    setIsSubmitting(false);
  };

  const [isSaving, setIsSaving] = useState(false);

  const save = async () => {
    if (!profile.email || !profile.fullName || !profile.phoneNumber) {
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
          Edit Profile
        </p>
      </animated.div>

      <div className='mt-3 w-full flex flex-col items-center justify-center'>
        <div className='relative flex flex-col items-center justify-center w-25 h-25 bg-white rounded-full'>
          <img
            src={images.xyzPfp}
            alt='Profile Picture'
            className='w-24 h-24'
            style={{ objectFit: 'contain'}}
          />

          <div className='absolute flex items-center justify-center bottom-0 right-0 w-8 h-8 rounded-full bg-secondary'>
            <img 
              src={icons.xyzCamera}
              alt='Edit Pfp'
              className='w-5 h-5'
              style={{ objectFit: 'contain'}}
            />
          </div>
        </div>

        <FormField 
        otherStyles='mt-12 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='Full Name'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        placeholder='John Doe'
        value={profile.fullName}
        handleChangeText={(e) => setProfile({ ...profile, fullName: e.target.value})}
        type="text"
        />

        <FormField 
        otherStyles='mt-3 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='Email'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        placeholder='name@example.com'
        value={profile.email}
        handleChangeText={(e) => setProfile({ ...profile, email: e.target.value})}
        type="text"
        />

        <FormField 
        otherStyles='mt-3 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-secondary bg-offwhite'
        title='Phone Number'
        titleStyles='font-hnroman text-secondary'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-secondary text-sm'
        placeholder='08123456789'
        value={profile.phoneNumber}
        handleChangeText={(e) => setProfile({ ...profile, phoneNumber: e.target.value})}
        type="number"
        />

        <FormField 
        otherStyles='mt-3 w-[90vw]'
        containerStyles='rounded-lg px-4 border border-offwhite-500 bg-offwhite'
        title='Role'
        titleStyles='font-hnroman text-offwhite-500'
        showTitle='true'
        textStyles='bg-offwhite flex-1 font-hnroman text-offwhite-500 text-sm'
        value={profile.role}
        type="text"
        />

        <Dropdown 
        />

        <MyDatePicker />

        <div className='mt-10 mb-6 flex h-12 w-[90vw] items-center justify-center'>
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

        </div>
        
      </div>

      

    </div>
  )
}

export default EditProfile