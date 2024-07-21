import React, { useContext, useEffect, useState } from 'react'


import './roomSection.css'

import { WebContext } from '../../store/WebContext'
import RoomCard from './roomCard/RoomCard'
import CreateNewRoomCard from '../../components/createNewRoomCard/CreateNewRoomCard'


function RoomSection() {
  const {state,dispatch} = useContext(WebContext)

  useEffect(()=>{
    async function fetchRecentRooms(){
      const response = await fetch('http://localhost:3000/user-recents')
      const recentRoomsData = await response.json()

      dispatch(
        {
          type :"UPDATE_ROOMS",
          payload: recentRoomsData.recentRooms,
        }
      )  
    }

    fetchRecentRooms()
    
  },[])

  const recentRooms = state.rooms
  

  const roomCardList = recentRooms.map(
    (roomData)=><RoomCard key={recentRooms.findIndex((data)=>data===roomData)} {...roomData}/>
  )
  
  
  return (
    <div className='room--container'>
      <h2>Recent Rooms</h2>

      <div className='room-cards'>
        {roomCardList}
        <CreateNewRoomCard/>
      </div>
      
    </div>
  )
}

export default RoomSection
