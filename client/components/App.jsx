import React from 'react'
import Header from './Header'
import AddTask from './AddTask'
import TaskList from './TaskList'

import api from './apiTodo'

export default React.createClass ({
  getInitialState () {
    return {
      tasks: [{ }]
    }
  },
  componentDidMount () {
    api.getTaskdo((err, tasks) => {
      if(!err){
        this.setState({
          tasks: tasks
        })
      }
    })
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
