import React, {Component} from 'react';
import MaterialNav from '../components/MaterialNav';
import {Switch, Route} from 'react-router-dom'
import '../../css/main.css';
import HomePage from './home'
import ArtPage from './art'
import DesignPage from './design'

class Layout extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "Abbie Ongheen",
    }
  }
  render() {
    return (
      <div className="bg">
        <MaterialNav currentRoute={this.props.location.pathname} title={this.state.title}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/design'  component={DesignPage}/>
          <Route path='/design/:cardName'  component={DesignPage}/>
          <Route path='/art'  component={ArtPage}/>
        </Switch>
      </div>
    );
  }
}

export default Layout;
