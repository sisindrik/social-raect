import React, { useState } from 'react';
import './App.css'; 

function Home() {
  const [products] = useState([
    { id: 1, name: "Live-1", description: "Live live magazines bring events to life with vivid imagery and real-time reporting.", price: 1, image: "a.jpg" },
    { id: 2, name: "Live-2", description: "Experience the pulse of the moment with live live magazines, capturing the essence of unfolding stories.", price: 2, image: "b.jpg" },
    { id: 3, name: "Live-3", description: "Engage in dynamic storytelling with live live magazines, offering immersive experiences beyond the page.", price: 3, image: "c.jpg" },
    { id: 4, name: "Live-4", description: "Stay connected to the world's happenings with live live magazines, delivering news as it unfolds.", price: 4, image: "d.jpg" },
    { id: 5, name: "Live-5", description: "Immerse yourself in the now with live live magazines, offering a glimpse into the heartbeat of society.", price: 5, image: "e.jpg" },
    { id: 6, name: "Live-6", description: "From concerts to conferences, live live magazines provide a front-row seat to the world's events in real-time.", price: 6, image: "f.jpg" },
  ]);

  return (
    
    <div className="App">
      <h1>Live Live</h1>
      <hr />
      <div className="main">
        {products.map((product,index) => (
          <div key={index} className='container'>
            <img width='250' src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>Price: ${product.price}</div>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
