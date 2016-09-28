import React from 'react'
// import TaskList from './TaskList.jsx'

const TaskList = React.createClass({
get InitialState()
  render: function (){
      const todoEntries = this.props.entries;

      function createTasks(item) {
        return <li key={item.id}>{item.text}</li>
      }

      const listItems = todoEntries.map(createTasks);

      return (
        <ul className="theList">
          {listItems}
        </ul>
      );
  }
});

const Task = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },
  addItem: function(e) {
    var itemArray = this.state.items;

    itemArray.push(
      {
        text: this._inputElement.value,
        id: Date.now()
      }
    );
    this.setState({
      items: itemArray
    });
    this._inputElement.value = "";

    e.preventDefault();
  },
  render: function() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
            placeholder="add task here" />
            <button type="submit">Add Task</button>
          </form>
        </div>
        <TaskList entries={this.state.items} />
      </div>
    );
  }
});

export default Task
