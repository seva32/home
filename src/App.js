import React from 'react';
import MainPage from './views/mainPage';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './utils/styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/styles/theme';
import store from './store';
const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </Router>
    </Provider>
  </ThemeProvider>
);

export default App;
