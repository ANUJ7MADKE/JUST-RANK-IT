import React, { useContext } from 'react'
import { WebContext } from '../../store/WebContext'

import './createNewRoomCard.css'
import plusIcon from '../../assets/plus-icon.png'

function CreateNewRoomCard() {
  const {CreateRoomModalRef} = useContext(WebContext)
  return (
    <div onClick={()=>CreateRoomModalRef.current.showModal()} className='room--card plus--icon'>
      <img id='plus--icon--room--card' src={plusIcon} alt='+'/>
      <h3>Create Room</h3>
    </div>
  )
}

export default CreateNewRoomCard
