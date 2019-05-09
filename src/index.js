import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import Projects from './Projects';
import Header from './Header';
import Trustpilot from './Trustpilot';


class App extends React.Component {
  render() {
    return (
      
      <Router>
        <Header />
        <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
        <Route path={"/trustpilot"} component={Trustpilot} />
        
      </Router>
      
    );

  }

}

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));

  
/*ReactDOM.render((
    <App />
), document.getElementById('root'))*/