import './App.css'
import { Card } from './components/Card/card'
import { BookData } from './interface/BookData'

function App() {
  const data: BookData[] = []
  return (
    <div className='container'>
      <h1>Biblioteca</h1>
      <div className="card-grid">
        {data.map(bookData => 
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
