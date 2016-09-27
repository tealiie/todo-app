import React from 'react'

import Task from './Task'

// const TaskList = React.createClass({
//   render () {
//     return (
//       app.get('/', function (req, res) {
//         const Task = React.renderToString(TaskForm());
//         res.render('index', {Content: Task});
//     )
//   }
//   })
// })

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

export default TaskList
