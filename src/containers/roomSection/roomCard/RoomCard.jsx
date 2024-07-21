import React, { useContext } from 'react'

import './roomCard.css'
import enterIcon from '../../../assets/enter-icon.png'
import deleteIcon from '../../../assets/delete-icon.png'
import {WebContext} from '../../../store/WebContext'

function RoomCard({admin,adminAvatar,cardImage,title,description}) {
  const {state,dispatch} = useContext(WebContext)
  const [settingDisplayed,setSettingDisplayed] = React.useState(false)

  async function handleDeleteCard({admin,title,description}){
    const updatedRoomCards = state.rooms.filter((roomCard) => 
      !(roomCard.title === title && roomCard.admin === admin && roomCard.description === description)
  );  
    
    dispatch({
      type:"UPDATE_ROOMS",
      payload: [...updatedRoomCards]
    })

    try{
      const response = await fetch("http://localhost:3000/delete-room",
      {
          method: 'DELETE',
          body: JSON.stringify([...updatedRoomCards]),
          headers: {
              'Content-Type':'application/json'
          }
      })
      
    }catch (error) {
      console.error(error.message)
    }

      
  }

  return (
    <div className='room--card' onMouseEnter={()=>setSettingDisplayed(true)} onMouseLeave={()=>setSettingDisplayed(false)} >

      <div className='room--card--head'>
        <img src= {`http://localhost:3000/${adminAvatar}`}/>
        <div>
          <h4>{admin}</h4>
          <h6>admin</h6>
        </div>
      </div>

      {settingDisplayed ? 
      <div className='room--card--setting'>
        <button className='room--card--setting--join'><img src={enterIcon} alt='Enter'/><p>Enter</p></button>
        <button onClick={()=>handleDeleteCard({admin,title,description})} className='room--card--setting--delete'><img src={deleteIcon} alt='Enter'/><p>Delete</p></button>
      </div>
      :
      <div className='room--card--image'>
        <img src= {`http://localhost:3000/${cardImage}`} alt='cardImage'/>
      </div>
      }

      <div className='room--card--text'>
        <h3 className='room--card--text--title'>{title}</h3>
        <p className='room--card--text--description'>{description}</p>
      </div>
    </div>
  )
}

export default RoomCard
