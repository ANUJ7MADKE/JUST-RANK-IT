import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './heroButtons.css'
import { showCreateRoomModalActions } from '../../../store/showCreateRoomModalSlice'
const HeroButtons = () => {

  const dispatch = useDispatch()
  const CreateRoomModalRef =  useSelector((state) => state.showCreateRoomModal.CreateRoomModalRef)

  function handleCreateRoom(){
    dispatch(showCreateRoomModalActions.openModal())
  }

  return (
    <div className='hero--buttons'>
      <button onClick={handleCreateRoom}>Create Room</button>
      <button>Join Room</button>
    </div>
  )
}

export default HeroButtons
