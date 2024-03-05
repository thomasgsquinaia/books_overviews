import { useState } from "react";
import { useBookDataUpdate } from "../../hooks/useBookDataUpdate"
import "./card.css"
import { UpdateModal } from "../updateModal/updateModal";

interface CardProps { 
  name: string,
  description: string
  image: string,
}

export function Card({name, description, image} : CardProps) {
  const { data } = useBookDataUpdate();
  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log(data);

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
          <p onClick={handleOpenModal} className="edit-book">Editar</p>
          
          {/* {isModalOpen && <DeleteModal closeModal={handleOpenModal}/>} */}
          <p className="remove-book">Excluir</p>
        </div>
    </div>
  )
}
