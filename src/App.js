import React, { useState, useEffect, useRef } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage"; // Stelle sicher, dass die korrekten Funktionen importiert werden
import { storage } from "./firebase";
import { v4 } from "uuid";
import "./App.css";
import LineChartComp from "./components/LineChart";
import DownloaderComp from "./components/Downloader";

function App() {
  const chartRef = useRef(null);
  const [imageBase64, setImageBase64] = useState(null);

  const handleImageDownload = (base64) => {
    setImageBase64(base64);
  };

  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}

      <LineChartComp ref={chartRef} />
      <DownloaderComp chartRef={chartRef} onImageDownload={handleImageDownload} />
    </div>
    
  );
}



export default App;
