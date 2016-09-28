import React from 'react'
import TaskItem from './TaskItem'

const TaskList = React.createClass({
  render: function (){
      return (
        <ul className="theList">
          {this.props.tasks.map((task)=>{
            return (
              <TaskItem text={task.text} key={task.id}/>
            )
          })}
        </ul>
      );
  }
});

export default TaskList
