import { useEffect, useState } from 'react'
import Navbar from './component/navbar'
import banner from './assets/Screenshot (161).png'
// import Clipboard from 'clipboard-polyfill';
import './App.css'

function App() {
  const [password, setPassword] = useState('KGFGHEDJ');
  const [length, setlenght] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [Uppercase, setUppercase] = useState(false);
  const [Lowercase, setLowercase] = useState(true);

  ///
  // const [password, setPassword] = useState("");
  // const [length, setLength] = useState(8);
  // const [number, setNumber] = useState(false);
  // const [symbol, setSymbol] = useState(false);
  // const [Upper, setUpper] = useState(false);
  // const [Lower, setLower] = useState(false);

  useEffect(() => {
    generatePassword()
  }, [numbers, length, symbol, Uppercase, Lowercase])


  function handle() {
    navigator.clipboard.writeText(password)
    alert("Copied")


  }


  function includeLowerCase(e) {
    setLowercase(e.target.checked)
  }
  function includeUpperCase(e) {
    setUppercase(e.target.checked)
  }
  function includeNumber(e) {
    setNumbers(e.target.checked)
  }
  function includeSymbol(e) {
    setSymbol(e.target.checked)
  }


  // function generatePassword() {
  //   let pass = "";
  //   let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  //   if (numbers) {
  //     str += "0123456789";
  //   }
  //   if (symbol) {
  //     str += "#@%^&*()!+";
  //   }
  //   if (Uppercase) {
  //     str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  //   }
  //   if (Lowercase) {
  //     str += "abcdefghijklmnopqrstuvwxyz"
  //   }
    
  //   for (let i = 0; i < length; i++) {
  //     let RandomNumber = Math.floor(Math.random() * str.length)
  //     let characters = str.charAt(RandomNumber)
  //     pass += characters;
  //   }
  //   setPassword(pass);


  // }





  function generatePassword() {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    if (numbers) {
      str += "0123456789";
    }
    if (symbol) {
      str += "#@%^&*()!+";
    }
    if (Uppercase) {
      let uppercase = str.toUpperCase();
      str = uppercase;
    }
    if (Lowercase) {
      let lowercase = str.toLowerCase();
      str = lowercase;
    }
  
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * str.length);
      let characters = str.charAt(randomNumber);
      pass += characters;
    }
  
    setPassword(pass);
  }
  


return (
  <>
    <Navbar></Navbar>
    <img src={banner} alt="banner" />
    <div className='bg-[#CAEDF7] mt-8 p-5'>
      <h1 className='text-5xl font-bold mt-12 text-center'>Instantly generate a secure, <br /> random password with the <br /> LastPass online tool</h1>
      <p className='text-center mt-10 font-medium'>Go beyond online generators with LastPass Premium. No matter what device or app you’re <br /> using, all your passwords are automatically generated, saved and synced – wherever you go.</p>

      <div className='mt-7  p-7 bg-white w-[50%]  rounded-md ml-[25%]'>
        <h1 className='ml-5 font-bold text-2xl'>{password}</h1>
      </div>
      <div className='w-[50%] ml-[25%] h-2 rounded-sm bg-gray-400'>
        .
      </div>


      <div className='mt-6 w-[50%] ml-[25%] pb-5 bg-white rounded-md p-3'>
        <h1 className='ml-7 mb-3 font-poppins text-2xl font-bold mt-2'>Customize your password</h1>
        <hr />

        <div className='flex gap-20'>
          <div className='mt-20 ml-6'>
            <label htmlFor="lengths"><span className='border-black border-solid border-[1px] px-3 py-1'>{length}</span></label>
            <input className='ml-4 ' type='range' id='lengths' min={8} max={40} onChange={(e) => setlenght(e.target.value)} value={length} />
          </div>

          <div className='ml-20 mt-4'>
            <input className='mr-3' type="checkbox" id='uppercase' onChange={includeUpperCase} />
            <label className='text-xl font-bold ' htmlFor="uppercase">UpperCase</label> <br />

            <input className='mt-5 mr-3' type="checkbox" id='lowercase' onChange={includeLowerCase} />
            <label className='text-xl font-bold ' htmlFor="lowercase">LowerCase</label> <br />

            <input className='mt-5 mr-3' type="checkbox" id='number' onChange={includeNumber} />
            <label className='text-xl font-bold ' htmlFor="number">Number</label>
            <br />
            <input className='mt-5 mr-3 mb-7' type="checkbox" id='symbol' onChange={includeSymbol} />
            <label className='text-xl font-bold ' htmlFor="symbol">Symbol</label>
          </div>
        </div>


      </div>

      <button onClick={handle} className='px-10 rounded-lg text-white font-Lobster text-xl py-3 mb-9 ml-[41%] mt-5 bg-red-500'>Copy Password</button>

    </div>
  </>
)
}

export default App