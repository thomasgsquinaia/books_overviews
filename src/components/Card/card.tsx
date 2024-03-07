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
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false)
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)

  const handleOpenModalUpdate = () => { 
    setIsModalOpenUpdate(prev => !(prev))
  }

  const handleOpenModalDelete = () => { 
    setIsModalOpenDelete(prev => !(prev))
  }

  return (
    <div className="card">
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p><b>Descrição:</b>{description}</p>
        <div className="operations">
          {isModalOpenUpdate && id && <UpdateModal bookInfo={{id,name,description,image}} closeModal={handleOpenModalUpdate}/>}
          <p onClick={handleOpenModalUpdate} className="edit-book">Edit</p>
          
          {isModalOpenDelete && id && <DeleteModal bookId={id} closeModal={handleOpenModalDelete}/>}
          <p onClick={handleOpenModalDelete} className="remove-book">Delete</p>
        </div>
    </div>
  )
}
