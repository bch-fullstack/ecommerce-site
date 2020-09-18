import React from 'react';
import './App.css';
import Header from './components/Layout/Header'
import LandingPage from './components/Pages/LandingPage'
import DetailPage from './components/Pages/DetailPage'
import { Route, Switch, withRouter } from 'react-router-dom'
import extraScript from './components/Extra/extraScript'

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
        extraScript();
    }
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/detail" component={DetailPage}/>
        </Switch> 
      </div>
    );
  }
}

export default withRouter(props => <App {...props}/>);
