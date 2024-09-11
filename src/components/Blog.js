import React, { useState } from 'react';

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const cards = [
    { id: 1, title: 'Razin', description: 'এটি প্রথম কার্ড।' },
    { id: 2, title: 'Rahid', description: 'এটি দ্বিতীয় কার্ড।' },
    { id: 3, title: 'juned', description: 'এটি তৃতীয় কার্ড।' },
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="সার্চ করুন" value={searchTerm} onChange={handleSearch} />
      <div>
        {cards.map((card) => (
          <div key={card.id} style={{ display: card.title.toLowerCase().includes(searchTerm.toLowerCase()) || card.description.toLowerCase().includes(searchTerm.toLowerCase()) ? 'block' : 'none' }}>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
