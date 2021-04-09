import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import {store} from './config/store'
import Routes from './config/router'
import './config/translations'

import fire from './firebase/firebase'

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme"
import  {useDarkMode} from "./components/useDarkMode"




function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  if(!mountedComponent) return <div/>

  const messaging = fire.messaging()
  messaging.requestPermission().then(()=>
  {
    return messaging.getToken()
  }).then(token =>
    {
      console.log('Token: ', token)
    })
    .catch(err =>
      {
        console.log(err)
      })

  messaging.onMessage((payload) =>
  {
    console.log(payload)
  })
  
  return (
      <ThemeProvider theme={themeMode}>
        <>
        <GlobalStyles/>
          <Provider store={store}>
            
              
            <Routes theme={theme} toggleTheme={themeToggler}>
              {/* <Navbar/> */}

            </Routes>
          </Provider>
          </>
      </ThemeProvider>
    );
}

export default App;