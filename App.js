import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="form-box">
        <h1>SIgn Up</h1>
        <form>
          <div className='input-group'>

            <div className="input-feild">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder='Name'></input>
            </div>

            <div className="input-feild">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder='Email'></input>
            </div>

            <div className="input-feild">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder='Password'></input>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
