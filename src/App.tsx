import './App.css'
import { Card } from './components/Card/card'
import { useBookData } from './hooks/useBookData';

function App() {
  const { data } = useBookData();
  return (
    <div className='container'>
      <h1>Biblioteca</h1>
      <div className="card-grid">
        {data?.map(bookData => 
        <Card 
          title={bookData.title} 
          description={bookData.description} 
          image={bookData.image}/>
        )}
      </div>
    </div>
  )
}

export default App
