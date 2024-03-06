import { useState } from "react";
import "./card.css"
import { UpdateModal } from "../updateModal/updateModal";
import { DeleteModal } from "../deleteModal/deleteModal";

interface CardProps { 
  id?: number,
  name: string,
  description: string
  image: string,
}

export function Card({ id, name, description, image} : CardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => { 
    setIsModalOpen(prev => !(prev))
  }

  return (
    <div className="card">
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p><b>Descrição:</b>{description}</p>
        <div className="operations">
          {isModalOpen && <UpdateModal closeModal={handleOpenModal}/>}
          <p onClick={handleOpenModal} className="edit-book">Edit</p>
          
          {isModalOpen && <DeleteModal bookId={id} closeModal={handleOpenModal}/>}
          <p onClick={handleOpenModal} className="remove-book">Delete</p>
        </div>
    </div>
  )
}
