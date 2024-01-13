
import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";

function UploaderComp({ setImageUrls, chartRef, imageBase64 }) {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (imageBase64) {
      setCurrentImage(imageBase64);
    }
  }, [imageBase64]);

  const uploadImageToFirebase = () => {

    if (!currentImage) return;

    const imageRef = ref(storage, `images/${Date.now()}.png`);
    const byteCharacters = atob(currentImage.split(",")[1]);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const imageFile = new Blob([byteArray], { type: 'image/png' });

    uploadBytes(imageRef, imageFile).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        setCurrentImage(null);
      });
    });
  };

  return (
    <div>
      <button onClick={uploadImageToFirebase}>Hochladen nach Firebase</button>
    </div>
  );
}

export default UploaderComp;
