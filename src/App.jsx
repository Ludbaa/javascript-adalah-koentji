import React from 'react';
import Button from "./components/Elements/Button";
 
function App () {
  return (
    <div className=" flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-4">

        <Button variant={`bg-lime-500`}>Login</Button>
        <Button variant={`bg-orange-500`}>Logout</Button>
        <Button variant={`bg-red-500`}>Register</Button>

      </div>
    </div>
  );
}

export default App;
