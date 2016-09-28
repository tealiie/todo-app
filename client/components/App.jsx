import React from 'react'
import Header from './Header'
import AddTask from './AddTask'
import TaskList from './TaskList'

export default React.createClass ({
  getInitialState () {
    return {
      tasks: [{
        id: 1,
        text: 'some text',
        isComplete: false
      }]
    }
  },
  render () {
    return (
      <div className="container">
        <Header text="PitBull ToDo" />
        <AddTask />
        <TaskList tasks={this.state.tasks}/>
      </div>
    )
  }
})
