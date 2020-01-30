import React, { Component } from 'react';
import Form from './components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Alert from './components/Alert';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInfos:{
        email:undefined,
        password:undefined
      },
      users : [
        {
          email : 'a@gmail.com',
          password: '123'
        },
        {
          email : 'b@gmail.com',
          password: '456',
        },
        {
          email : 'c@gmail.com',
          password: '789',
        }
      ],
      startChecking:false,
      showAlert : false
      
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event, userInfos){
    event.preventDefault();
    
    this.setState({
      userInfos,
      startChecking:true,
      showAlert:true
    });
  }

  

  checkUserInfos = () => {
    console.log('entred');
    const userInfos = this.state.userInfos;
    const users = this.state.users;
    let res =[];
    let isUserExist;
    if (this.state.startChecking) {
        res = users.filter((user) => {
        return user.email === userInfos.email && user.password === userInfos.password;
      }
      );
    }
    isUserExist = res.length ? true : false;
    return isUserExist;
  }

  render(){
    return (
      <div className="container">
        <div className="row">
          <div className="mx-auto col-md-6 my-2">
          
            <Alert display={this.state.showAlert} isuserexist = {this.checkUserInfos}/>
            <Form userInfosChecking = {this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

