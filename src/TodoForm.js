import React from 'react';

class TodoForm extends React.Component {
    state = {name: ''}

    handleChange = (e) => {
     this.setState({ name: e.target.value });
   }

   handleSubmit = (e) => {
     e.preventDefault();
     console.log(this.state.name)
   }
  render() {
    const {name} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>

        <input
         value={name}
         name="name"
         onChange={this.handleChange}
           required
           placeholder="What to do" />
      </form>
    )
  }
}

export default TodoForm;
