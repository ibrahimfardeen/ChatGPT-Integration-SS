import React, { useState } from 'react'
import reactLogo from '../assets/logo.svg';
import icon from '../assets/icon.svg'
import { Box, Heading, Text, Button } from "@sparrowengg/twigs-react";

const Main = (props) => {
  const [name, setName] = useState('')

  return (
    <Box>
      <img src={icon} className="App-logo" alt="logo" />
      <img src={reactLogo} className="App-logo" alt="logo" />
      <Heading size = "h3">Hi {name},</Heading>
      <Text>Welcome to your first react app </Text>
      <Button css={{
        background:"$primary"
      }}>Click Me!</Button>
    </Box>
  )
}

export default Main
