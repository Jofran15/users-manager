import React, { Component } from 'react'

class UserForm extends Component {
  state = {}
  handleChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    })
  handleSubmit = (e) => {
    e.preventDefault()
    console.log('form was summited')
    console.log(this.state)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='users_form'>
          <div className='users_inputs'>
            
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              placeholder='Nombre'
              value={this.state.name}
            ></input>
            <input
              type='password'
              name='password'
              onChange={this.handleChange}
              placeholder='Contraseña'
              value={this.state.password}
            ></input>
            <button onClick={this.handleClick}>Ingresar</button>
          </div>
        </div>
      </form>
    )
  }
}
export default UserForm
