import React, { Component } from 'react';

export default class Message extends Component{

  state = {
    userName: '',
    message: ''
  }
handleSubmit = (e) => {
  e.preventDefault()
  const userName = this.state.userName
  const message = this.state.message
  this.props.addNewMessage(this.state)
  fetch('http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages',{
    method: 'POST',
           headers: {
                     'Content-Type': 'application/json',
                     'Accept': 'application/json'},
           body: JSON.stringify({
             message:{
               real_name: userName,
               message: message
             }
           })
  }).then(res=>{this.props.updateAppState(this.state)})
  .then(dog => this.setState({
    userName: '',
    message: ''
  }))

}

handleChangeForm = (e) => {
  console.log(e.target.value)
  this.setState({
    [e.target.name]: e.target.value
  })
}

  render(){
    return(
      <div>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        Name:<input type="text" name="userName" value={this.state.userName} onChange={this.handleChangeForm}/>
        Message:<input type="text" name="message" value={this.state.message} onChange={this.handleChangeForm}/>
        <input type='submit'/>
      </form>
      </div>

    )
    }



}
