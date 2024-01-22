// import React from 'react';




const Button = (props) => {
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`} type="submit">
      {props.text}
    </button>
  );
};

function App () {
  return (
    <div className=" flex justify-center bg-blue-600 min-h-screen items-center">
      <div className="flex gap-x-7">

        <Button variant={`bg-red-700`} text={`login`}/>
        <Button variant={`bg-slate-700`} text={ `logout`} />
        <Button variant={`bg-black`} text={`register`} />

      </div>
    </div>
  );
}

export default App;
