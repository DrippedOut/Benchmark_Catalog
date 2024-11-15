import React from 'react'
import { Textarea } from './textarea'

function Textbox({ item, handleInputChange, HUinfo }) {
  return (
    <div>
      <Textarea onChange={(e)=>handleInputChange(item.name,e.target.value)} required={item.required} defaultValue={HUinfo?.[item?.name]}/>
    </div>
  )
}

export default Textbox
