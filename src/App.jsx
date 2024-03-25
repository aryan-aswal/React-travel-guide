import { useState } from 'react'
import './App.css'
import data from './data'
import CardContainer from './components/CardContainer'
function App() {
  const [tour, setTour] = useState(data);
  const [tourCount, setTourCount] = useState(tour.length);
  function removeCard(id) {
    let newTour = tour.filter((item)=>{
      return item.id !== id;
    })
    setTour(newTour);
    setTourCount(newTour.length);
  }
  if(tour.length === 0) {
    return (
      <div className='no-tour-left-container'>
        <h1 className='no-tour-left-heading'>No Tour Left</h1>
        <button className="refresh-button" onClick={()=>{setTour(data)}}>REFRESH</button>
      </div>
    )
  }
  return (
    <div className='wrapper'>
      <div className='header'>
        <h2 className='heading'>Plan With Love</h2>
      </div>
      <div className='cards-container'>
        <CardContainer data={tour} func={removeCard}></CardContainer>
      </div>
    </div>
  )
}

export default App
