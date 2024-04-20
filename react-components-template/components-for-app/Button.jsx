import { useState } from "react";

const Button = ({text, placeholder}) => {
  const [valueBut, setValueBut] = useState(text);
  const [pHolder, setPHolder] = useState(placeholder);

  const handleChange = (e) => {
    setPHolder(e.target.value);
  }

  const handleClick = () => {
    setValueBut(valueBut + '!');
  }

  return (
    <>
      <input className="input" type="text" placeholder={pHolder} onChange={handleChange}/>
      <button className="button" onClick={handleClick}>{valueBut}</button>
    </>
    
  )
}

export default Button;