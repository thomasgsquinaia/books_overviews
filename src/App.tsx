import './App.css'
import { Card } from './components/Card/card'
import { useBookData } from './hooks/useBookData';

function App() {
  const { data } = useBookData();
  return (
    <div className='container'>
      <h1>Overviews</h1>
      <div className="card-grid">
        {data?.map(bookData => 
        <Card 
          name={bookData.name} 
          description={bookData.description} 
          image={bookData.image}/>
        )}
      </div>
    </div>
  )
}

export default App
