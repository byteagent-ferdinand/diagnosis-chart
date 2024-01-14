
import React, { useRef, useState } from "react";
import "./App.css";
import LineChartComp from "./components/LineChart";
import DiagnosisStopperComp from "./components/DiagnosisStopper";
import PdfDownloaderComp from "./components/PdfDownloader";

function App() {
  const chartRef = useRef(null);
  const [imageBase64, setImageBase64] = useState(null);
  
  const handleImageDownload = (base64) => {
    setImageBase64(base64);
  };

  return (
    <div className="App">
      
      <LineChartComp ref={chartRef} />

      {!imageBase64 && <DiagnosisStopperComp chartRef={chartRef} onImageDownload={handleImageDownload} />}
      {imageBase64 && <PdfDownloaderComp imageBase64={imageBase64} />}


    </div>
  );
}

export default App;
