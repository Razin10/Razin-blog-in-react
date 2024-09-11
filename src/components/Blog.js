import React, { useState } from 'react';

function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="Search..." />
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function CardList({ cards, searchTerm }) {
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    card.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredCards.map(card => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </div>
  );
}

function Blog() {
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', description: 'This is the first card.' },
    { id: 2, title: 'Card 2', description: 'This is the second card.' },
    { id: 3, title: 'Search', description: 'This is about searching.' },
  ]);

  const handleSearch = (searchTerm) => {
    // You can implement more complex search logic here if needed
  };

  return (
    <div>
      <Searchbar onSearch={handleSearch} />
      <CardList cards={cards} searchTerm={searchTerm} />
    </div>
  );
}

export default Blog;
