import React from 'react'

import Header from './Header.jsx'
import Task from './Task.jsx'
// import TaskList from './TaskList.jsx'

export default React.createClass ({
  render () {
    return (
      <div className="container">
        <Header text="PitBull ToDo" />
        <Task />
        {/* <TaskList /> */}
      </div>
    )
  }
})
