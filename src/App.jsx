import React from 'react';
import Button from "./components/Elements/Button";


function App () {
  return (
    <div className='flex justify-center min-h-screen items-center'>
      <div className='w-full max-w-xs'>
        <h1 className='text-2xl font-semibold mb-2 text-red-500'>Login
        </h1>
        <p className='font-medium text-slate-400 mb-7'>
          welcome, please enter your details
        </p>
        <form action=''>
          <div className='mb-6'>
            <label htmlFor='email'
              className='block text-slate-600 text-sm font-semibold  mb-2 text-left'>
              Email
            </label>
            <input type='text' className='text-sm border rounded-4-full py-2 px-3 text-slate-500 opacity-50'
              placeholder='example@gmail.com'
            />
          </div>
        </form>
        
      </div>
    </div>
  );
}

export default App;
