import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import Theme from './component/Theme';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <HashRouter>
        <Route component={App} />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)


