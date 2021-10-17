import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Redirect, Switch, BrowserRouter} from 'react-router-dom';
import App from './App';
import CalculatorPage from './components/layout/CalculatorPage';
import Main from './components/layout/Main';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        exact 
        path='/' 
        component={Main}
      />
      <Route 
        exact 
        path='/calc' 
        component={CalculatorPage}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
