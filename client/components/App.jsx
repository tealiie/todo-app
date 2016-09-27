// import React from 'react'
//
// export default React.createClass({
//   render() {
//     return (
//       <h1>React development has begun!</h1>
//     )
//   }
// })

import React from 'react'

import Header from './Header.jsx'
// import Task from './Task.jsx'
// import TasksList from './TasksList.jsx'

export default React.createClass ({
  render () {
    return (
      <div className="container">
        <Header text="PitBull ToDo" />
      </div>

    )
  }
})
