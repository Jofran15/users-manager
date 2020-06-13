import React, { Component } from 'react'
import UsersList from './UsersList'

class Users extends Component {
  state={
    data:[
      {
        id: 0,
        firstName: 'Jofran',
        lastName:'benitez'
              },
      {
        id: 1,
        firstName:'John'   ,   
        lastName:'arreola'     
     }
    ]
  }
    

  render() {
    return (
      <div className='users'>
      <div className='users_list'>
      <UsersList users={this.state.data}/>
        
      </div>
      
      </div>
    )
  }
}

export default Users
