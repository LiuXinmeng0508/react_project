import React, { Component } from 'react'
import Header from './components/header'
import {HashRouter as Router,Route} from 'react-router-dom';
import home from './container/Home/Home';
import api from './container/Api/Api';
import start from './container/Start/Start';
import about from './container/About/About';
import Entrance from './container/Home/Entrance';
import Login from './container/Login/Login'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
    render() {
        return (
          <Router>
            <div>
                <Header/>
                <div className='main'>
                    <div className="content">
                      <Route path='/home' component={home} />
                      <Route path='/api' component={api} />
                      <Route path='/start' component={start} />
                      <Route path='/about' component={about} />
                      <Route path="/login" component={Login}/>
                    </div>
                    <Entrance/>
                </div>
            </div>
          </Router>
        )
    }
}

