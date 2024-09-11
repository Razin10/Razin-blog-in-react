import React, { useState } from 'react';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState([
    { id: 1, title: 'Card 1', content: 'This is the content of card 1.' },
    { id: 2, title: 'Card 2', content: 'This is the content of card 2. Search for this.' },
    { id: 3, title: 'Card 3', content: 'This is the content of card 3.' },
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
      <div>
        {cards.filter((card) =>
          card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.content.toLowerCase().includes(searchTerm.toLowerCase())
        ).map((card) => (
          <div key={card.id} className="card">
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
