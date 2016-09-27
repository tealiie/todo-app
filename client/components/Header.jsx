import React from 'react'

const Header = props => <h1>{props.text}</h1>
Header.propTypes = {
  text: React.PropTypes.string.isRequired
}

export default Header
