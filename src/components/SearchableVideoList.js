import React, { useState } from 'react';
import './search.css';

const videoList = [
  {
    id: 1,
    url: 'https://youtu.be/ydoQHynAbWc?si=KjNmYRQcoT8RKaqS',
    title: 'Razin', // আপনার ভিডিওর শিরোনাম দিন
  },
  {
    id: 2,
    url: 'https://youtu.be/WP7W40pc6NU?si=dxoYFnc0FWliGkU2',
    title: 'Rahid',
  },
  {
    id: 3,
    url: 'https://youtu.be/YZ3YElFoEQM?si=6-CXdzQ6J0okhuZr',
    title: 'Ehan',
  },
];

function SearchableVideoList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(videoList);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const newFilteredVideos = videoList.filter((video) =>
      video.title.toLowerCase().includes(searchTerm)
    );
    setFilteredVideos(newFilteredVideos);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ভিডিও সার্চ করুন"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredVideos.map((video) => (
          <li key={video.id}>
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchableVideoList;
