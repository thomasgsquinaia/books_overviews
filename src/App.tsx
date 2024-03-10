import { useState } from 'react';
import './App.css'
import { Card } from './components/Card/card'
import { useBookData } from './hooks/useBookData';
import { CreateModal } from './components/createModal/createModal';
import ImgUrl from './assets/images/backeground-books.jpg';

function App() {
  const { data } = useBookData();
  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log(data);
  const handleOpenModal = () => {
    setIsModalOpen(prev => !(prev))
  }
  return (
    <div style={{backgroundImage: `url(${ImgUrl})`, backgroundSize: '595px'}} className='container'>
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
        <button onClick={handleOpenModal}>New</button>
      </div>
    </div>
  )
}

export default App
