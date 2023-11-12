import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './components/main';
import { ThemeProvider } from '@sparrowengg/twigs-react';

const App = () => {

  const [loaded, setLoaded] = useState(false);
  const [child, setChild] = useState(<h3 style={{"textAlign":"center","marginTop":"100px"}}>App is loading...</h3>)

  useEffect(() => {
    setLoaded(true)
  }, []);

  useEffect(() => {
    if (!loaded) return
    const client = window.app.initialized()
      setChild((<Main client={client} />))
  }, [loaded])

  return (
    <ThemeProvider theme={{colors: {
      primary: '#19b885',
      primary100: '#d1f1e7',
      primary200: '#baeada',
      primary300: '#a3e3ce',
      primary400: '#19b885',
      primary500: '#17a678',
      primary600: '#14936a',
      primary700: '#12815d',
      primary800: '#0f6e50',
      primary900: '#0d5c43',
    }}}>
    {child}
    </ThemeProvider>
  )
}

export default App;
