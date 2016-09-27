import React from 'react'

const Task = React.createClass({

  render: function() {
    return (
      <form>
        <input placeholder='task here' />
        <button>Add Task</button>
      </form>
    )
  }
});

export default Task
