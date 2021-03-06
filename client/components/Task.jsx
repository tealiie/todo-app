import React from 'react'
// import TaskList from './TaskList.jsx'

const TaskList = React.createClass({
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

        </div>
        <TaskList entries={this.state.items} />
      </div>
    );
  }
});

export default Task
