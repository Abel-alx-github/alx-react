import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils'
import { useState } from 'react';



function App() {
  let [email, setEmail] = useState('');
let [password, setPassword] = useState('');

  function handleInputChange(e) {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'passwd') {
      setPassword(e.target.value);
    }
  }

  function handleLabelClick(e) {
    if (e.target.nextElementSibling && e.target.nextElementSibling.tagName === 'INPUT') {
      e.target.nextElementSibling.focus();
    }
  }

  return (
   <>
    <div className="App-header">
      <img src={logo} alt='logo'/>
      <h1>School dashboard</h1>
    </div>

    <div className='App-body'>
      <p>Login to access the full dashboard</p>
      <label htmlFor='email' onClick={handleLabelClick}>Email: </label>
      <input type="email" id='email' name='email' value={email} onChange={handleInputChange}/>
      
      <label htmlFor="passwd" onClick={handleLabelClick}>Password: </label>
      <input type="password" id='passwd' name='passwd' value={password} onChange={handleInputChange} />
      
      <button type='button'>OK</button>
    </div>
  
    <div className='App-footer'>
      <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
    </div>
  </>
  )
}


export default App;