import React from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useDiagnose } from '../DiagnoseContext';


const PdfDownloaderComp = ({ imageBase64 }) => {

  const { diagnosisData } = useDiagnose();

  const handleDownload = () => {

    const pdf = new jsPDF();

    const title = 'Vehicle Diagnostic Report';
    const textWidth = pdf.getStringUnitWidth(title) * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
    
    const xPosition = (pdf.internal.pageSize.width - textWidth) / 2;
    const yPosition = 20;
    
    pdf.setFontSize(16);
    pdf.text(title, xPosition, yPosition);
    pdf.setFontSize(12);
    pdf.text(diagnosisData.customer.label, 20, 40);
    pdf.text(diagnosisData.customer.value, 70, 40);

    pdf.text(diagnosisData.vehicleDetails.label, 20, 50);
    pdf.text(diagnosisData.vehicleDetails.model.label + diagnosisData.vehicleDetails.model.value, 70, 50);
    pdf.text(diagnosisData.vehicleDetails.licensePlate.label + diagnosisData.vehicleDetails.licensePlate.value, 70, 55);

    pdf.text(diagnosisData.diagnosticResult.label, 20, 65);
    
    pdf.text(diagnosisData.diagnosticResult.text, 20, 75, { maxWidth: 170 });

    const columns = ['Parameter', 'Temperature | Time'];
    const data = [
      [diagnosisData.diagnosticResult.mean.label, diagnosisData.diagnosticResult.mean.value],
      [diagnosisData.diagnosticResult.min.label, diagnosisData.diagnosticResult.min.value],
      [diagnosisData.diagnosticResult.max.label, diagnosisData.diagnosticResult.max.value]
    ];


    // Define headStyles to set the background color of the header row
    const headStyles = { fillColor: [255, 165, 0] }; // Orange color

    const startY = 115; // Startposition basierend auf dem letzten Element oder 10, wenn keine vorherige Y-Position vorhanden ist
    pdf.autoTable({ startY, head: [columns], body: data, theme: 'grid', headStyles });

    const imgData = imageBase64;
    pdf.addImage(imgData, 'JPEG', 50, 150, 100, 100);

    pdf.save('diagnostic_report.pdf');
  };

  return (
    <button type='button' className="styledButton" onClick={handleDownload}>
      Download Diagnostic Report
    </button>
  );
};

export default PdfDownloaderComp;

