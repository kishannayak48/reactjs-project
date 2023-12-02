import React, { useState } from 'react'
import { FontSizeContext } from './fontSizeContext';

import Profile from './profile'
import FontSize from './fontSize'
import Post from './post'
import { resolve } from 'styled-jsx/css';


function Customer() {
  const [fontSize, setFontSize] = useState();


  return (
    <center>
      <FontSize handleFontSize={setFontSize} />
      <FontSizeContext.Provider value={fontSize}>

        <Profile />
        <Post />
      </FontSizeContext.Provider>
    </center>
  )
}

export default Customer
