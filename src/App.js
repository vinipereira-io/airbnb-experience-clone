import './App.css';
import Navbar from 'components/Navbar';
import Hero from 'components/Hero';
import Card from 'components/Card';
import Data from './data.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='app--content'>
        <Hero />
        <section className="cards-list">
          {Data.map(item => (
            <Card 
            key={item.id}
            item={item}
            /* image={card.coverImg}
            rating={card.stats.rating}
            reviewCount={card.stats.reviewCount}
            location={card.location}
            title={card.title}
            price={card.price}
            openSpots={card.openSpots} */
            />
          )
            )}
        </section>
      </div>
    </div>
  );
}

export default App;
