import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Page from './components/Page';

injectTapEventPlugin();

const muiTheme = getMuiTheme({darkBaseTheme});

render((
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router>
      <div>
        <Route exact path="/" component={Page}/>
      </div>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'));
