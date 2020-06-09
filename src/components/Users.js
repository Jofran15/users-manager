import React, { Component } from 'react'
import Usercard from './UserCard'
import UserForm from './UserForm'

class Users extends Component {
  render() {
    return (
      <div className='users'>
        <Usercard firstName='ricardo' lastName='benitez' />
        <UserForm/>
        
      </div>
    )
  }
}

export default Users
