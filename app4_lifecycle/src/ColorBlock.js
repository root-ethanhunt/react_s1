import React from 'react'
function ColorBlock() {
  let styles = {
    margin: '20px',
    width: '250px',
    height: '250px',
    backgroundColor: 'blue',
  };
  return (
    <div>
      <div className="blue-box" style={styles}>
      </div>
    </div>
  )
}
export default ColorBlock