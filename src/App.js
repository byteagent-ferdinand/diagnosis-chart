
// App.js
import React, { useRef, useState } from "react";
import "./App.css";
import LineChartComp from "./components/LineChart";
import DownloaderComp from "./components/Downloader";
import UploaderComp from "./components/Uploader"; 
import ImageRendererComp from "./components/ImageRenderer"; 

function App() {
  const chartRef = useRef(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  
  const handleImageDownload = (base64) => {
    setImageBase64(base64);
  };

  return (
    <div className="App">
      <UploaderComp
        chartRef={chartRef}
        setImageUrls={setImageUrls}
        imageBase64={imageBase64}/>

      <LineChartComp ref={chartRef} />

      {imageUrls.map((url) => (
        <div key={url} className="image-wrapper" style={{ width: "500px", height: "auto" }}>
          <img
            src={url}
            alt="uploaded"
            style={{ width: "500px", height: "auto" }}
          />
        </div>
      ))}

      <DownloaderComp chartRef={chartRef} onImageDownload={handleImageDownload} />
      <ImageRendererComp imageBase64={imageBase64} />

    </div>
  );
}

export default App;
