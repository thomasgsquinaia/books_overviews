import React from 'react'
import "./card.css"

interface CardProps { 
  title: string,
  description: string
  image: string,
}

export function Card({title, description, image} : CardProps) {
  return (
    <div className="card">
        <img src="" alt="" />
        <h2></h2>
        <p><b>Descrição:</b></p>
    </div>
  )
}
