import React, { useContext } from 'react'
import { FontSizeContext } from './fontSizeContext'

const DisplayText = (props) => {
  const { text } = props
  const fontSize = useContext(FontSizeContext)
  return (
    <div style={{ fontSize: (fontSize || 14) + "px" }}>
      {text}
    </div>
  )
}

export default DisplayText
