import React, { useEffect } from 'react'


import './roomSection.css'
import RoomCard from './roomCard/RoomCard'
import CreateNewRoomCard from '../../components/createNewRoomCard/CreateNewRoomCard'
import { useDispatch, useSelector } from 'react-redux'
import { handleRoomSliceActions } from '../../store/handleRoomSlice'


function RoomSection() {
  const rooms = useSelector((state)=> state.handleRoom.rooms)
  const dispatch = useDispatch()

  useEffect(()=>{
    async function fetchRecentRooms(){
      const response = await fetch('http://localhost:3000/user-recents')
      const recentRoomsData = await response.json()

      dispatch(handleRoomSliceActions.updateRoom(recentRoomsData.recentRooms))  
    }

    fetchRecentRooms()
    
  },[])

  const recentRooms = rooms
  

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
