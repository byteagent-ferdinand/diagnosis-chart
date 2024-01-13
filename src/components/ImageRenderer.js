// ImageRenderer.js
import React from 'react';

const ImageRendererComp = ({ imageBase64 }) => {
  return (
    <div>
      <h2>Image Renderer</h2>
      {imageBase64 && (
        <img style={{width: '200px'}} src={imageBase64} alt="Chart" />
      )}
    </div>
  );
};

export default ImageRendererComp;


