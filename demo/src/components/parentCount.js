import React, {useState, useEffect} from "react";

const Session = () => {
  const [inputValue, setValue] = useState(sessionStorage.getItem('inputValue') || '')
  // useEffect(() => {
  //   sessionStorage.setItem('inputValue', inputValue)
  // }, [inputValue]);
  const onChange = e => setValue(e.target.value) 
  console.log(sessionStorage.getItem('inputValue'));
  return (
    <div>
      <input type='text' onChange={onChange} defaultValue={inputValue} />
    </div>
  );
};

export default Session;