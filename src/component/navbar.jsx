import { useState } from 'react'

function App() {
      const [password , setPassword] = useState('KGFGHEDJ');
      return (
            <>
                  <div className='flex justify-around pb-2 '>
                        <div >
                              <h1 className='text-red-600 mt-3  font-Lobster  text-4xl'>Password Generator</h1>
                        </div>
                        <div className='flex gap-12  text-black '>
                              <p className='font-poppins mt-6 hover:text-red-700'>Personal</p>
                              <p className='font-poppins mt-6 hover:text-red-700'>Bussiness</p>
                              <p className='font-poppins mt-6 hover:text-red-700'>Partners</p>
                              <p className='font-poppins mt-6 hover:text-red-700'>Contact</p>
                              <p className='font-poppins mt-6 hover:text-red-700'>Review</p>
                              <button className='text-white mt-[14px] font-poppins px-6 py-2 bg-red-500 rounded-full hover:text-red-300 '>Log In</button>
                        </div>
                  </div>
            </>
      )
}

export default App