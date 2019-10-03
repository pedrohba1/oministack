import React from 'react';
import './App.css';
import logo from './assets/logo.svg'


function App() {
  return (
    <div className = "container">
      <img src= {logo} alt=""/>
      <div className = "content">
          <p>
              <strong>spots</strong>
            <strong>talentos</strong>
          </p>

        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" 
          id = "email" 
          placeholder = "seu melhor email"
          />

          <button className = "btn" type = "submit ">Entrar</button>
        </form>

      </div>
    </div>
  );
}

export default App;
