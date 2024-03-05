const Label = (props) => { 
    const { htmlFor, children } = props;
    return (
        <label
            htmlFor={htmlFor}
              className='block text-slate-600 text-sm font-semibold  mb-2 text-left'>
              {children}
            </label>
    );
};

export default Label;