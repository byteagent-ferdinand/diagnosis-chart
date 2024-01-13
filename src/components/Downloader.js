// Downloader.js
import React, { useCallback } from 'react';

const DownloaderComp = ({ chartRef, onImageDownload }) => {
  const downloadImage = useCallback(() => {
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href = chartRef.current.toBase64Image();
    link.click();

    console.log(123);//todo del
    // Pass the base64 image string to the parent component
    const imageBase64 = chartRef.current.toBase64Image();
    onImageDownload(imageBase64);
  }, [chartRef, onImageDownload]);

  return (
    <button type="button" onClick={downloadImage}>
      Download
    </button>
  );
};

export default DownloaderComp;


