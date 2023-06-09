import React from 'react'
import Input from '../Shared/Input';
import Button from '../Shared/Button';

const Counter = () => {
  return (
    <>
    <div className='text-center text-red-600'> 
    <p className='text-gray-dark lg:text-9xl md:text-7xl sm:text-5xl font-slackside pt-2 pb-2 mt-2 mb-2'>
    COUNTER
    </p>
    <div className='lg:pr-3 lg:pl-3 lg:pt-2 lg:pb-2 text-gray-light bg-gray-dark break-words'>
      <p className='flex justify-center items-center font-slackside lg:text-5xl md:text-4xl'>Hello Tailwind</p>
    </div>
    </div>
    <div className='flex justify-center items-center my-5 mx-5 w-full'>
    <Input type='text' placeholder='name' className='my-3 p-3 rounded-l-lg' label='lname'/>
    </div>
    <div className='flex justify-center items-center my-5 mx-5 w-full'>
    <Input type='text' placeholder='name' className='my-3 p-3 rounded-l-lg' label='lname'/>
    </div>
    <div className='flex justify-center items-center lg:mt-6 md:mt-4 sm:mt-2'>
      <Button buttonname='submit'/>
      <Button buttonname='add' className="mr-2 ml-2"/>
      <Button buttonname='sub'/>
    </div>
    </>
  );
};

export default Counter;
