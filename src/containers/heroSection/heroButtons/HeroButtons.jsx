import React, { useContext } from 'react'
import { WebContext } from '../../../store/WebContext'

import './heroButtons.css'
const HeroButtons = () => {
  const {CreateRoomModalRef} = useContext(WebContext)

  function handleCreateRoom(){
    CreateRoomModalRef.current.showModal()
  }

  return (
    <div className='hero--buttons'>
      <button onClick={handleCreateRoom}>Create Room</button>
      <button>Join Room</button>
    </div>
  )
}

export default HeroButtons
