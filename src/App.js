import React, { Component } from 'react';
import Message from './Message'
import Search from './Search'
import './App.css';
import Form from './Form'

class App extends Component {

  state = {
    messages: [],
    searchInput: ""
  }

  addKeyToMessage = m => ({...m, birthday: ''})


  componentDidMount(){
    fetch('http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages')
    .then(response => response.json())
    .then(allMessages => {
      const messages = allMessages.map(message => this.addKeyToMessage(message))
      this.setState(
        prevState => {
          return {
            messages: messages
          }
        }
    )

  })
}

updateAppState = (newMessage) => {
  console.log(newMessage)
  this.setState({
    messages: [...this.state.messages, newMessage]
  }

  )


}

removeMessage = (id) => {
  fetch(`http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages/${id}`, {method: "DELETE"})
  const toDelete = this.state.messages.filter(message => {
      return message.id !== id
    })
  this.setState({
    messages: toDelete
  })
}

handleChange = (event) => {
  this.setState({
    searchInput: event.target.value
  })
}

filterMessages = (searchInput) => {
  return this.state.messages.filter(m => {

     return m.message.toLowerCase().includes(this.state.searchInput.toLowerCase())})
}

addNewMessage = (message) => {
  const newMessage = {
    userName: message.userName,
    message: message.message
  }
  this.setState({
    messages: [newMessage, ...this.state.messages]
  })
}

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <Search handleChange={this.handleChange} searchInput={this.state.searchInput}/>
      <Form addNewMessage={this.addNewMessage} updateAppState={this.updateAppState}/>
      <Message removeMessage={this.removeMessage} messages={this.filterMessages()}/>
      </div>
    );
  }
}

export default App;
