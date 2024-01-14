import React from 'react';
import jsPDF from 'jspdf';


const PdfDownloaderComp = ({ imageBase64 }) => {
  const handleDownload = () => {

    const pdf = new jsPDF();

    const title = 'Vehicle Diagnostic Report';
    const textWidth = pdf.getStringUnitWidth(title) * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
    
    const xPosition = (pdf.internal.pageSize.width - textWidth) / 2;
    const yPosition = 20;
    
    pdf.setFontSize(16);
    pdf.text(title, xPosition, yPosition);
    pdf.setFontSize(12);
    pdf.text('Customer:', 20, 40);
    pdf.text('Max Mustermann', 70, 40);

    pdf.text('Vehicle details:', 20, 60);
    pdf.text('Model: XYZ', 70, 60);
    pdf.text('License plate: ABC123', 70, 70);

    pdf.text('Diagnostic result:', 20, 90);
    
    const diagnosisText = `After a comprehensive vehicle diagnosis, we can state the following results: The engine shows no abnormal noises and runs in a stable condition. All electronic systems have been checked and are working properly. The brakes show no signs of wear and all wheels have the recommended tire pressure. In terms of engine heat, we found that the cooling system components are working properly. The radiator and thermostat are in good condition and there are no signs of overheating during our tests. Nevertheless, we recommend checking and topping up the coolant regularly to ensure optimum operating temperatures. In summary, the vehicle can be classified as technically sound. However, we recommend that regular maintenance is carried out, particularly in relation to the cooling system, to ensure optimum performance and safety.`;

    pdf.text(diagnosisText, 20, 100, { maxWidth: 170 });

    const imgData = imageBase64;
    pdf.addImage(imgData, 'JPEG', 20, 150, 150, 150);

    pdf.save('diagnostic_report.pdf');
  };

  return (
    <button type='button' className="styledButton" onClick={handleDownload}>
      Download Diagnostic Report
    </button>
  );
};

export default PdfDownloaderComp;

