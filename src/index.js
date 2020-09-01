import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import SignInPage from './components/SignInPage';

const route = (
<Router>
<Route exact path="/" component={App}/>
<Route path="/sign" component={SignInPage}/>
</Router>

)

ReactDOM.render(

  <React.StrictMode>
    {/* <App /> */}
    {route}
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
