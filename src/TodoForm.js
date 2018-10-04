import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
      <form>
        <input required placeholder="What to do" />
      </form>
    )
  }
}

export default TodoForm;
