import React from 'react'

const TaskItem = React.createClass({
  render: function (){
      return (
        <li> {this.props.text} </li>
      );
  }
});

export default TaskItem
