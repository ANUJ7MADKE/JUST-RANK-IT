import React from 'react'

import './App.css'

import { HeroSection,RoomSection } from './containers'
import WebContextProvider from './store/WebContextProvider'
import CreateNewRoomModal from './components/createNewRoomModal/CreateNewRoomModal'


const App = () => {
  return (
    <WebContextProvider>
      <div id='main--container'>
        <HeroSection/>
        <CreateNewRoomModal/>
        <RoomSection/>
      </div>
    </WebContextProvider>
  )
}

export default App
