// // UploaderComp.js
// import React, { useState, useEffect } from "react";
// import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
// import { storage } from "../firebase";
// import { v4 } from "uuid";

// function UploaderComp({ setImageUrls }) {
//   const [imageUpload, setImageUpload] = useState(null);

//   const uploadFile = () => {
//     if (imageUpload == null) return;
//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         setImageUrls((prev) => [...prev, url]);
//       });
//     });
//   };

//   useEffect(() => {
//     const imagesListRef = ref(storage, "images/");
//     listAll(imagesListRef).then((response) => {
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           setImageUrls((prev) => [...prev, url]);
//         });
//       });
//     });
//   }, [setImageUrls]);

//   return (
//     <div>
//       <input
//         type="file"
//         onChange={(event) => {
//           setImageUpload(event.target.files[0]);
//         }}
//       />
//       <button onClick={uploadFile}> Upload Image</button>
//     </div>
//   );
// }

// export default UploaderComp;



// UploaderComp.js
import React, { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";

function UploaderComp({ setImageUrls, chartRef, imageBase64 }) {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    if (imageBase64) {
      // Wenn ein neues Bild übergeben wurde, setze es als aktuelles Bild
      setCurrentImage(imageBase64);
    }
  }, [imageBase64]);

  const uploadImageToFirebase = () => {
    if (!currentImage) return;

    // Hier kannst du weitere Logik für die Bestätigung implementieren
    // (z.B., ein Popup mit einer Bestätigungsfrage)

    // Hochladen des aktuellen Bildes in Firebase
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
        // Optional: Zurücksetzen des aktuellen Bildes nach dem Hochladen
        setCurrentImage(null);
      });
    });
  };

  return (
    <div>
      {/* Hier kannst du deine UI-Komponente für die Bestätigung hinzufügen */}
      {/* Beispiel: */}
      {/* <ConfirmationPopup onConfirm={uploadImageToFirebase} /> */}

      {/* Beispiel-Button für das Hochladen */}
      <button onClick={uploadImageToFirebase}>Hochladen nach Firebase</button>
    </div>
  );
}

export default UploaderComp;
