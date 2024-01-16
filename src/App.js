
import React, { useRef, useState } from "react";
import "./App.css";
import LineChartComp from "./components/LineChart";
import DiagnosisStopperComp from "./components/DiagnosisStopper";
import PdfDownloaderComp from "./components/PdfDownloader";
import { DiagnoseProvider } from "./DiagnoseContext";
function App() {
  const chartRef = useRef(null);
  const [imageBase64, setImageBase64] = useState(null);
  
  const handleImageDownload = (base64) => {
    setImageBase64(base64);
  };

  return (
    <div className="App">
      
      <DiagnoseProvider>
        <LineChartComp ref={chartRef} />
        {!imageBase64 && <DiagnosisStopperComp chartRef={chartRef} onImageDownload={handleImageDownload} />}
        {imageBase64 && <PdfDownloaderComp imageBase64={imageBase64} />}
      </DiagnoseProvider>



    </div>
  );
}

export default App;
