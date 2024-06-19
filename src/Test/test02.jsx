import React from 'react'

function Test02({ togglePage, pages }) {
  return (
    <div>
      <p onClick={() => togglePage(0, 0)}>test 2</p>
    </div>
  )
}

export default Test02
