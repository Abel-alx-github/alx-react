import Login from './Login.css';
import { useState } from 'react';

function Login () {
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

            <div className='App-body'>
                <p>Login to access the full dashboard</p>
                <label htmlFor='email' onClick={handleLabelClick}>Email: </label>
                <input type="email" id='email' name='email' value={email} onChange={handleInputChange}/>
                
                <label htmlFor="passwd" onClick={handleLabelClick}>Password: </label>
                <input type="password" id='passwd' name='passwd' value={password} onChange={handleInputChange} />
                
                <button type='button'>OK</button>
            </div>

        </>
    )};

 export default Login;