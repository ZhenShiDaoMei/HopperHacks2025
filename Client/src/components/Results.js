import React from 'react';

const Results = ({ results }) => {
  return (
    <div>
      <h2>Results</h2>
      <h3>Manuals</h3>
      <ul>
        {results.manuals.map((manual, index) => (
          <li key={index}>{manual}</li>
        ))}
      </ul>
      <h3>Videos</h3>
      <ul>
        {results.videos.map((video, index) => (
          <li key={index}>{video}</li>
        ))}
      </ul>
      <h3>Parts</h3>
      <ul>
        {results.parts.map((part, index) => (
          <li key={index}>{part}</li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
