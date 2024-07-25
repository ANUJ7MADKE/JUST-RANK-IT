import './createNewRoomCard.css'
import plusIcon from '../../assets/plus-icon.png'
import { useDispatch } from 'react-redux'
import { showCreateRoomModalActions } from '../../store/showCreateRoomModalSlice'

function CreateNewRoomCard() {
  const dispatch = useDispatch()

  return (
    <div onClick={()=>dispatch(showCreateRoomModalActions.openModal())} className='room--card plus--icon'>
      <img id='plus--icon--room--card' src={plusIcon} alt='+'/>
      <h3>Create Room</h3>
    </div>
  )
}

export default CreateNewRoomCard
