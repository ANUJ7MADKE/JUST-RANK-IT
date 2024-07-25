import React from 'react'

import './App.css'

import { HeroSection,RoomSection } from './containers'
import CreateNewRoomModal from './components/createNewRoomModal/CreateNewRoomModal'


const App = () => {
  return (
    <div id='main--container'>
      <HeroSection/>
      <CreateNewRoomModal/>
      <RoomSection/>
    </div>
  )
}

export default App
