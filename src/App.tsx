import { useState } from 'react';
import './App.css'
import { Card } from './components/Card/card'
import { useBookData } from './hooks/useBookData';
import { CreateModal } from './components/createModal/createModal';

function App() {
  const { data } = useBookData();
  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log(data);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !(prev))
  }
  return (
    <div className='container'>
      <h1>Overviews</h1>
      <div className="card-grid">
        {data?.map(bookData => 
        <Card
          id={bookData.id}
          name={bookData.name} 
          description={bookData.description} 
          image={bookData.image}/>
        )}
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>Create</button>
      </div>
    </div>
  )
}

export default App
