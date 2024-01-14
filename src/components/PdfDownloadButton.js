import React from 'react';
import jsPDF from 'jspdf';
import chartImage from '../chart.png';


const DownloadButton = ({ imageBase64 }) => {
  const handleDownload = () => {
    // Erstelle ein neues PDF-Dokument
    const pdf = new jsPDF();

    pdf.setFontSize(16);
    pdf.text('Fahrzeug-Diagnosebericht', 70, 20, { align: 'center' });

    pdf.setFontSize(12);
    pdf.text('Kunde:', 20, 40);
    pdf.text('Max Mustermann', 70, 40);

    pdf.text('Fahrzeugdetails:', 20, 60);
    pdf.text('Modell: XYZ', 70, 60);
    pdf.text('Kennzeichen: ABC123', 70, 70);

    pdf.text('Diagnoseergebnis:', 20, 90);
    
    const diagnosisText = `Nach einer umfassenden Fahrzeugdiagnose können wir folgende Ergebnisse feststellen: Der Motor zeigt keine abnormalen Geräusche und läuft in einem stabilen Zustand. Alle elektronischen Systeme wurden überprüft und funktionieren einwandfrei. Die Bremsen weisen keine Verschleißerscheinungen auf, und alle Räder haben den empfohlenen Reifendruck. In Bezug auf die Motorhitze haben wir festgestellt, dass die Kühlsystemkomponenten ordnungsgemäß funktionieren. Der Kühler und der Thermostat sind in gutem Zustand, und es gibt keine Anzeichen für Überhitzung während unserer Tests. Wir empfehlen dennoch, die Kühlflüssigkeit regelmäßig zu überprüfen und aufzufüllen, um optimale Betriebstemperaturen sicherzustellen. Zusammenfassend kann das Fahrzeug als technisch einwandfrei eingestuft werden. Wir empfehlen jedoch, regelmäßige Wartungsarbeiten durchzuführen, insbesondere in Bezug auf das Kühlsystem, um eine optimale Leistung und Sicherheit zu gewährleisten.`;

    pdf.text(diagnosisText, 20, 100, { maxWidth: 170 });

    const imgData = imageBase64; // Hier wird die Bilddaten-Funktion aus dem Chart verwendet
    // const imgData = chartImage; // Füge hier die Daten deines Bildes ein
    pdf.addImage(imgData, 'JPEG', 20, 150, 150, 150);

    // Speichere das PDF als Datei mit dem Namen "diagnosebericht.pdf"
    pdf.save('diagnosebericht.pdf');
  };

  return (
    <button onClick={handleDownload}>
      Download Diagnosebericht
    </button>
  );
};

export default DownloadButton;


// const PdfDownloadButton = () => {
//   const handleDownload = () => {
//     // Erstelle ein neues PDF-Dokument
//     const pdf = new jsPDF();

//     // Füge Überschrift hinzu
//     pdf.setFontSize(18);
//     pdf.text('Motorradmotor-Diagnosebericht', 20, 20);

//     // Füge Text hinzu (ersetze den Dummy-Text durch deine eigene Logik)
//     // const diagnosisText = 'Hier steht dein Motorradmotor-Diagnosebericht.';
//     pdf.setFontSize(12);
//     pdf.text(diagnosisText, 20, 40);

//     // Füge ein Bild aus den Assets zum PDF hinzu
//     const imgData = chartImage;
//     pdf.addImage(imgData, 'PNG', 10, 60, 100, 80);

//     // Speichere das PDF als Datei mit dem Namen "download.pdf"
//     pdf.save('download.pdf');
//   };

//   return (
//     <button onClick={handleDownload}>
//       Download PDF
//     </button>
//   );
// };

// export default PdfDownloadButton;

