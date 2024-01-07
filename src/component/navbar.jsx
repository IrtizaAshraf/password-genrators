import { useState } from 'react'


function App() {

  return (
    <>
     <div className='flex justify-around pb-2 '>
        <div >
        <h1 className='text-red-500 mt-3  font-Lobster  text-4xl'>Pass Generator</h1>
        </div>
        <div className='flex gap-12  text-black'>
        <p className='font-poppins mt-6'>Personal</p>
        <p className='font-poppins mt-6'>Bussiness</p>
        <p className='font-poppins mt-6'>Partners</p>
        <p className='font-poppins mt-6'>Contact</p>
        <p className='font-poppins mt-6'>Review</p>
        <button className='text-white mt-[14px] font-poppins px-6 py-2 bg-red-500 rounded-full'>Log In</button>
        </div>
      </div>
    </>
  )
}

export default App