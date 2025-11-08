import { useState } from 'react'
import image from './assets/image.png'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/logo.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div className="form-container">
        <aside>
        <img src={image} alt="image" className='w-[550px] pr-10' />
        </aside>

        <div className='form-container-wrap'>
            <div className= ' layout m-2  '>
          <h1 className='text-3xl '>Sign in</h1>
          <div className='text-[#818181]'>Create your account in a second</div>
        </div>
          
          <div className="form m-2 ">
            <input 
            type="text"
            placeholder='First Name:'
            required
            className='First-Name'
          /> <br /> 

            <input 
              type="text"
              placeholder='Last Name:'
              required 
              className='First-Name'
            /> <br />
            
            <input 
              type="email"
              placeholder='Email Address:'
              required 
              className='First-Name'
            /> <br /> 

            <input 
              type="password"
              placeholder='Create Password:'
              required 
              className='First-Name '
            /> <br /> 
            <label className="flex items-center space-x-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="ml-2 w-4 h-4 accent-[#7754F6] cursor-pointer"
              />
              <span className="text-gray-700">
                I agree to the terms and privacy policy
              </span>
            </label>

             
          </div>
          <div className='m-2 '>
                <button 
                type='submit'
                className='w-105 h-[60px] p-[size 10px] mb-0 border rounded-[10px] bg-[#7754F6] text-white' >
                  Create an account
              </button>     
          </div>
          <div className='m-2 '>Already a memeber? Login</div>
          <div className="flex items-center">
            <div className="flex-1 border-t border-[#D1D1D1]"></div>
            <span className="px-4 text-[#818181] font-medium">Or continue with</span>
            <div className="flex-1 border-t border-[#D1D1D1]"></div>
          </div>
          <div><img src={logo} alt="logo" className='w-79 h-[45px] mx-auto'/></div>
        </div>
       
        
      </div>
    </>
  )
}

export default App
