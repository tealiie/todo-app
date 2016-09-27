// adding new task

import React from 'react'

export default React.createClass({
propTypes:{
  header:React.PropTypes.String.isRequired,
},

render()  {
  return (
<title>To Do</title>

<form> Add Task<br>
  <input type="text" name="firstname"><br>
  <input type="submit" value="Submit">
</form>
  )

}
})
