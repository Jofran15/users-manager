import React, { Component } from 'react'

class UsersList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user) => {
            return (
              <li key={user.id}>
                <p>
                  {user.firstName}
                  {user.lastName}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default UsersList
