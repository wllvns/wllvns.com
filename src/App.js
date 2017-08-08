import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Home, Pictures, Videos, Resume } from './components/Pages';
import { Footer } from './components/Footer';
import './App.css';
import './fonts/css/font-awesome.css';

const bodyPagesConst = [
        {
          label: 'HOME',
          link: '/',
          key: 0,
          text: 'This is just some filler text for the homepage.',
        },
        {
          label: 'PICTURES',
          link: '/pictures',
          key: 1,
          text: 'This is just some filler text for the pics page.',
        },
        {
          label: 'VIDEOS',
          link: '/videos',
          key: 2,
          text: 'This is just some filler text for the video page.',
        },
        {
          label: 'RESUME',
          link: '/resume',
          key: 3,
          text: 'This is just some filler text for the resume page.',
        },
      ];

class App extends Component {

  render() {
    return (
      <Router className="App">
        <div>
          <div className="App-header">
            <NavBar bodyPages={bodyPagesConst} onClick={this.onClick}/>
          </div>
          <div className="App-body">
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/pictures" component={Pictures} className="App-body"/>
            <Route exact={true} path="/videos" component={Videos} className="App-body"/>
            <Route exact={true} path="/resume" component={Resume} className="App-body"/>
          </div>
          <Footer className="App-footer" />
        </div>
      </Router>
    );
  }
}

const NavBar = ({
  bodyPages,
  onClick
}) => 
  <ul className="NavBar">{bodyPages.map((bodyPage) =>
      <li className="NavBar-li">
        <Link to={bodyPage.link} className="button-inline">
          {bodyPage.label}
        </Link>
      </li>
    )}</ul>

export default App;
