import React, { useState } from 'react';
import './Blog.css'

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', content: 'This is the content of card 1.', image: 'dmitry-bukhantsov-pSbYgGBHgfk-unsplash.jpg', link:'https://getbootstrap.com/docs/5.0/utilities/text/', linktext:'google' }, // Add image property
    { id: 2, title: 'Card 2', content: 'This is the content of card 2. Search for this.', image: 'dmitry-bukhantsov-tdBWtHuZFVc-unsplash.jpg', link:'https://getbootstrap.com/docs/5.0/utilities/text/', linktext:'test'}, // Add image property
    { id: 3, title: 'Card 3', content: 'This is the content of card 3.', image: 'sydney-rae-YI_PrcuD8Ps-unsplash.jpg', link:'https://getbootstrap.com/docs/5.0/utilities/text/', linktext:'razin'}, // Add image property
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="card-container">  {/* Wrap cards in a container for styling */}
        {cards.filter((card) =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.content.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((card) => (
          <div key={card.id} className="card">
            <img src={require(`./img/${card.image}`)} alt={card.title} /> {/* Dynamic image path */}
            <h2>{card.title}</h2>
            <p>{card.content}</p>
            <a className="cardlink font-monospace btn btn-primary" href={card.link} target="_blank" rel="noopener noreferrer">
                  {card.linktext}
                </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
