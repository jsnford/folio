import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './index.css'
import Projects from './Projects';
import Header from './Header';


class App extends React.Component {
  render() {
    return (
      
      <Router>
        <Header />
        <Route path={"/projects"} component={Projects} />
        
      </Router>
      
    );

  }

}

/*ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>, document.getElementById('root'));*/

ReactDOM.render((
    <App />
), document.getElementById('root'))