import React from 'react'

const Task = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },
  render: function() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input placeholder="add task here" />
            <button type="submit">Add Task</button>
          </form>
        </div>
      </div>
    );
  }
});

export default Task
