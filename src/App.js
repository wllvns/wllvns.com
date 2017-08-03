import React, { Component } from 'react';
import { Body } from './components/Body';
import { Button } from './components/Buttons';
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
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(label) {
    alert(label);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar bodyPages={bodyPagesConst} onClick={this.onClick}/>
        </div>
        <Body className="App-body"/>
        <div className="App-footer">Footer</div>
      </div>
    );
  }
}

const NavBar = ({
  bodyPages,
  onClick
}) => 
  <ul className="NavBar">{bodyPages.map((bodyPage) =>
      <li className="NavBar-li">
        <Button onClick={onClick(bodyPage.label)}>
          {bodyPage.label}
        </Button>
      </li>
    )}</ul>

export default App;
