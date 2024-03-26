import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'



import Message from '../Message'

import './index.css'
const peopleNames = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']

class ChatBox extends Component {
  state = {
    messageArray: [],
    inputMessage: '',
  }

  updateInputValue = event => {
    this.setState({inputMessage: event.target.value})
  }

  sendMessage = () => {
    const {messageArray, inputMessage} = this.state

    if (inputMessage.trim() === '') {
      return
    }

    const randomIndex = Math.floor(Math.random() * peopleNames.length)
    const randomUsername = peopleNames[randomIndex]
    const time = new Date()

    const newMessage = {
      id: uuidv4(),
      message: inputMessage,
      username: randomUsername,
      time, // Store the username with the message
    }

    const newMessageArray = [...messageArray, newMessage]
    this.setState({messageArray: newMessageArray, inputMessage: ''})
  }

  renderSidebar = () => (
    <div className="siderbar-container">
        <div className='sidebar-username-container' >
            <p className='sidebar-user-profile-name'>DV</p>
            <p className='sidebar-username'>Dheeraj Vupplapati</p>
        </div>
      <p className='sidebar-caption'>mern developer</p>
    </div>
  )

  renderMessages = () => {
    const {messageArray} = this.state

    return (
      <div className="message-container">
        <ul className="list-container">
          {messageArray.map(item => (
            <Message key={item.id} item={item} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {inputMessage} = this.state
    return (
      <div className="chatbox-container">
        {this.renderSidebar()}
        <div>
          {this.renderMessages()}
          <div className="input-container">
            <input
              className="input-text"
              type="text"
              value={inputMessage}
              onChange={this.updateInputValue}
              placeholder='Type your Message'
            />
            <button type="button" className='send-icon' onClick={this.sendMessage}>
            <i className="fa-solid fa-paper-plane "></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatBox
