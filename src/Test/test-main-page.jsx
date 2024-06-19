import React from 'react'
import Test01 from './test01'
import Test02 from './test02'
import useTogglePages from '../Storage-Mobile/hooks/useTogglePages'
import { useState } from 'react'


export const pageLogic = [
    [true, false],
  ]

function TestMainPage() {

    const [pages, togglePage] = useTogglePages(pageLogic);

  return (
    <div>
      {pages[0][0] && <Test01 togglePage={togglePage} pages={pages}/>}
      {pages[0][1] && <Test02 togglePage={togglePage} pages={pages}/>}
    </div>
  )
}

export default TestMainPage
