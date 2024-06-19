import React from 'react'

function Test01( { togglePage, pages}) {
  return (
    <div>
      <p onClick={() => togglePage(0, 1)}>test 1</p>
    </div>
  )
}

export default Test01
