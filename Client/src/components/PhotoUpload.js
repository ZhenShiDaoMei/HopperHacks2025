import React from 'react';

const PhotoUpload = ({ onPhotoUpload }) => {
  return (
    <div>
      <input type="file" accept="image/*" onChange={onPhotoUpload} />
    </div>
  );
};

export default PhotoUpload;
