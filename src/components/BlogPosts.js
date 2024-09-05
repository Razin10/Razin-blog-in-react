import React, { useState, useEffect } from 'react';

function BlogPosts() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="main-container">
      <div className="search">
        <p>Search for my blog</p>
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Blog posts */}
      <div className="post">
        <div className="all business">
          <h2>Lorem ipsum dolor sit Razin</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae aspernatur possimus illum, repellat ad quasi earum, illo voluptatibus minima fugiat saepe magni corporis vero eius accusantium quidem, consectetur nesciunt!</p>
        </div>
      </div>
      {/* Other blog posts */}
    </div>
  );
}

export default BlogPosts;
