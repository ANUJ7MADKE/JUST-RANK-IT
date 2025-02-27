import React, { useEffect,useRef, useState } from 'react'

import './createNewRoomModal.css'

import crossIcon from '../../assets/cross-icon.png'

import arrowImage from '../../assets/arrow.png'

import { showCreateRoomModalActions } from '../../store/showCreateRoomModalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { handleRoomSliceActions } from '../../store/handleRoomSlice'

function handleArrowClick(direction,imageContainer){
    if (direction==="left"){
        imageContainer.current.scrollLeft -= 170
    }

    if (direction==="right"){
        imageContainer.current.scrollLeft += 170
    }
}






function CreateNewRoomModal() {

  const CreateRoomModalRef = useRef()
  const isOpen = useSelector((state) => state.showCreateRoomModal.isOpen)
  const rooms = useSelector((state)=> state.handleRoom.rooms)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isOpen) {
        if (CreateRoomModalRef.current) {
            CreateRoomModalRef.current.showModal();
        }
    } else {
        if (CreateRoomModalRef.current) {
            CreateRoomModalRef.current.close();
        }
    }
  }, [isOpen]);


  const imageContainerRef = useRef();
  const [formData,setFormData] = useState({title: "", description:"",cardImage:"roomImage2.jpg"})


  const roomData = ["roomImage1.jpg","roomImage2.jpg","roomImage3.jpg","roomImage4.jpg"]
  

  async function handleFormSubmission(event){
    event.preventDefault()

    const newFormData = {...formData, adminAvatar:formData.cardImage, admin:"ANUJ MADKE"}


    dispatch(handleRoomSliceActions.updateRoom([...rooms,newFormData]))

    try {
        const response = await fetch("http://localhost:3000/create-room",
            {
                method: 'PUT',
                body: JSON.stringify([...rooms,newFormData]),
                headers: {
                    'Content-Type':'application/json'
                }
            }
        )
    } catch (error) {
        console.error(error.message)
    }
    

    setFormData((prev)=>({...prev, title: "", description:""}))
    dispatch(showCreateRoomModalActions.closeModal())

  }


  return (
    <dialog ref={CreateRoomModalRef} className='create--new--room--container'>
        
        <div className='create--new--room--container--head'>
            <h2>Create New Room</h2>
            <button onClick={()=>{dispatch(showCreateRoomModalActions.closeModal())}}><img src={crossIcon} alt='X'/></button>
        </div>
    

        <form onSubmit={handleFormSubmission} className='create--new--room--container--form'>
            <div className='create--new--room--container--form--text--input'>
                <div className='create--new--room--container--form--text--input--title'>
                    <label>Room Title</label>
                    <input placeholder='Name your room' name='title' required maxLength={30} minLength={2}
                     onChange={(event)=> setFormData((prev)=>({...prev,title:event.target.value}))} value={formData.title}/>
                </div>

                <div className='create--new--room--container--form--text--input--agenda'>
                    <label>Room Agenda</label>
                    <textarea placeholder='Description (e.g., A place to discuss and rank top books)' name='description'
                        required maxLength={250} minLength={10}
                        onChange={(event)=> setFormData((prev)=>({...prev,description:event.target.value}))} value={formData.description}/>
                </div>
            </div>

            <div className='create--new--room--container--form--image--input--container'>

                <img id="create--new--room--container--form--image--input--container--left--arrow" 
                src={arrowImage} alt='<' onClick={()=> handleArrowClick("left",imageContainerRef)}/>

                <div className='create--new--room--container--form--image--input' ref={imageContainerRef}>
                    {roomData.map((imgSRC)=>{
                        return <img key={imgSRC} 
                        onClick={()=> setFormData((prev)=> ({...prev, cardImage:imgSRC}))} 
                        src={`http://localhost:3000/${imgSRC}`}
                        className= {formData.cardImage === imgSRC ? "selected":''}
                        />}
                    )}                    
                </div>

                <img id="create--new--room--container--form--image--input--container--right--arrow"
                 src={arrowImage} alt='>'  onClick={()=> handleArrowClick("right",imageContainerRef)}/>

            </div>



            <button id='create--new--room--container--form--submit--button' type='submit'>Create</button>
            <button onClick={()=>setFormData((prev)=>({...prev, title: "", description:""}))} id='create--new--room--container--form--clear--button' type='reset'>Clear</button>
        </form>

    </dialog>
  )
}

export default CreateNewRoomModal
