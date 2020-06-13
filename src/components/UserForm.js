import React, { Component } from 'react'

class UserForm extends Component {
  state = {
    firtsName:'',
    lastName:'',
  }
  handleChange = (e) =>
    this.setState({
      [e.target.firstName]: e.target.value,
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
          <label>Nombre</label>
            
            <input
              type='text'
              name='firstName'
              onChange={this.props.onChange}
              value= {this.props.formValues.name}             
             
            ></input>
              <label>Apellido</label>
            <input
              type='text'
              name='lastName'
              onChange={this.props.onChange}             
              value={this.props.formValues.lastName}
             
            ></input>
            <button onClick={this.handleClick}>Guardar</button>
          </div>
        </div>
      </form>
    )
  }
}
export default UserForm
