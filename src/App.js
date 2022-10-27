import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


const cardData = data.map((item) => {
  return  <Card 
             key={item.id}
             {...item}
  />
})

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>{cardData}</section>
    </div>
  );
}

export default App;
