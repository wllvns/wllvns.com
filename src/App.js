import React, { Component } from 'react';
import './App.css';
import './fonts/css/font-awesome.css'

const bodyPagesConst = [
        {
          label: 'HOME',
          key: 0
        },
        {
          label: 'PICS',
          key: 1
        },
        {
          label: 'VIDEO',
          key: 2
        },
        {
          label: 'ABOUT ME',
          key: 3
        },
        {
          label: 'RESUME',
          key: 4
        },
      ];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar bodyPages={bodyPagesConst}/>
        </div>
        <div className="App-body">Body</div>
        <div className="App-footer">Footer</div>
      </div>
    );
  }
}

const NavBar = ({
  bodyPages
}) => 
  <ul className="NavBar">{bodyPages.map((bodyPage) =>
      <li className="NavBar-li">{bodyPage.label}</li>
    )}</ul>

export default App;
