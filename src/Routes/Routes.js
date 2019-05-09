import React from 'react';
import ReactGA from 'react-ga';
import { Route, Router } from 'react-router-dom';
import App from '.';
import Projects from './Projects';

ReactGA.initialize(process.env.REACT_APP_G_ANALYTICS);

const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};



class Routes extends Component {
    render() {
        return (
            <Router>
                <Route path={process.env.PUBLIC_URL + '/'} component={App} />
                <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
            </Router>
        )
    }
}

export default Routes;