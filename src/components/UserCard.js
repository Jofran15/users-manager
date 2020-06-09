import React, { Component } from 'react'
import '../styles/Usercard.css'

export default class Usercard extends Component {
  render() {
  
    
    return (
      <div className='user_card'>
        <div classNameuser_card='user_img'>
          <img alt='user-img'></img>
        </div>
        <div className='user_input'>
          <h1>
            {this.props.firstName}
            <br />
            {this.props.lastName}
          </h1>
       
        </div>
      </div>
    )
  }
}
