import React from 'react'

const AddTask = React.createClass({
  render: function (){
      return (
        <form onSubmit={this.addItem}>
          <input ref={(a) => this._inputElement = a}
          placeholder="add task here" />
          <button type="submit">Add Task</button>
        </form>
      );
  }
});

export default AddTask
