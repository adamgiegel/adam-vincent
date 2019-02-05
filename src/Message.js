import React, { Component } from 'react';

export default class Message extends Component{
  render(){
    return(
      <div>
      {
        this.props.messages.map(message => {
          return (
            <div key={message.id}>
            <h1 className="messageList">Username: {message.real_name}</h1>
            <p className="messageList">Message: {message.message}</p>
            <button onClick={() => this.props.removeMessage(message.id)}>Delete</button>
            </div>
          )
        })
      }
      </div>
    )
  }
}
