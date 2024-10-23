// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';


function App() {

const navigate = useNavigate();
  const handleButton = () => {
    navigate('/Boo') ; 
  }
  // console.log("rendered");
  
  // const [count,setCount] = useState(0);
  
  return (
    <>
      <button onClick={handleButton}>Click</button>
    </>
  );
}
export default App;
