import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'


const cardData = data.map((item) => {
  return  <Card 
             key={item.id}
             img={item.coverImg}
             rating={item.stats.rating}
             reviewCount={item.stats.reviewCount}
             location={item.location}
             title={item.title}
             price={item.price}
  />
})

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cardData}
    </div>
  );
}

export default App;
