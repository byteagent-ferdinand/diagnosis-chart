
// App.js
import React, { useRef, useState } from "react";
import "./App.css";
import LineChartComp from "./components/LineChart";
import DownloaderComp from "./components/Downloader";
import UploaderComp from "./components/Uploader"; 
import ImageRendererComp from "./components/ImageRenderer"; 
import PDFFile from "./components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDownloadButton from "./components/PdfDownloadButton";

function App() {
  const chartRef = useRef(null);
  const [imageBase64, setImageBase64] = useState(null);
  // const [imageUrls, setImageUrls] = useState([]);
  
  const handleImageDownload = (base64) => {
    setImageBase64(base64);
  };

  return (
    <div className="App">
      {/* <UploaderComp
        chartRef={chartRef}
        setImageUrls={setImageUrls}
        imageBase64={imageBase64}/> */}

      <LineChartComp ref={chartRef} />

      {!imageBase64 && <DownloaderComp chartRef={chartRef} onImageDownload={handleImageDownload} />}
      {imageBase64 && <PdfDownloadButton imageBase64={imageBase64} />}

      {/* <ImageRendererComp imageBase64={imageBase64} /> */}

    </div>
  );
}

export default App;
