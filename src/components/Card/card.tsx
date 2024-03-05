import { BookData } from "../../interface/BookData"
import "./card.css"

interface CardProps { 
  name: string,
  description: string
  image: string,
}

export function Card({name, description, image} : CardProps) {

  const update = () => {
    const bookData: BookData = { 
      name,
      description,
      image,
    }
    mutate(bookData);
  }

  return (
    <div className="card">
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p><b>Descrição:</b>{description}</p>
        <div className="operations">
          <p className="edit-book">Editar</p>
          <p className="remove-book">Excluir</p>
        </div>
    </div>
  )
}
