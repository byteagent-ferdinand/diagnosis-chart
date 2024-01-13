
// // App.js
// import React, { useRef, useState } from "react";
// import "./App.css";
// import LineChartComp from "./components/LineChart";
// import DownloaderComp from "./components/Downloader";
// import UploaderComp from "./components/Uploader"; // Neu hinzugefügt

// function App() {
//   const chartRef = useRef(null);
//   const [imageBase64, setImageBase64] = useState(null);
//   const [imageUrls, setImageUrls] = useState([]);

//   const handleImageDownload = (base64) => {
//     setImageBase64(base64);
//     console.log(222);
//   };

//   return (
//     <div className="App">
//       {/* Verwende die neue UploaderComp-Komponente */}
//       <UploaderComp chartRef={chartRef} setImageUrls={setImageUrls} />

//       <LineChartComp ref={chartRef} />

//         {imageUrls.map((url) => (
//           <div key={url} className="image-wrapper" style={{ width: "500px", height: "auto" }}>
//             <img
//               src={url}
//               alt="uploaded"
//               style={{ width: "500px", height: "auto" }}/>
//           </div>
//         ))}

//       <DownloaderComp chartRef={chartRef} onImageDownload={handleImageDownload} />
//     </div>
//   );
// }

// export default App;








// App.js
import React, { useRef, useState } from "react";
import "./App.css";
import LineChartComp from "./components/LineChart";
import DownloaderComp from "./components/Downloader";
import UploaderComp from "./components/Uploader"; // Neu hinzugefügt
import ImageRendererComp from "./components/ImageRenderer"; // Neu hinzugefügt

function App() {
  const chartRef = useRef(null);
  const [imageBase64, setImageBase64] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  // const handleImageDownload = (base64) => {
  //   setImageBase64(base64);
  //   // Optional: Hier kannst du eine Popup-Bestätigung für das Hochladen anzeigen
  // };

  const handleImageDownload = (base64) => {
    // Führe asynchrone Aufgaben durch
    setImageBase64(base64);


    // Rufe resolve auf, um anzuzeigen, dass die Aufgabe abgeschlossen ist
  };

  return (
    <div className="App">
      {/* Verwende die neue UploaderComp-Komponente */}
      <UploaderComp
        chartRef={chartRef}
        setImageUrls={setImageUrls}
        imageBase64={imageBase64}
      />

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
