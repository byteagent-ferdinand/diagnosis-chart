
import React, { useCallback } from 'react';
import { blackScales, blackLegend, whiteScales, whiteLegend } from './LineChartStyles';

const DownloaderComp = ({ chartRef, onImageDownload }) => {

  console.log()
  const downloadImage = useCallback(async () => {
    if (chartRef.current) {
      await chartRef.current.stopDataGeneration();
      await setFontColorToBlack();
  
      const imageBase64 = chartRef.current.toBase64Image();
      onImageDownload(imageBase64);

      await setFontColorToWhite();
    }
  }, [chartRef, onImageDownload]);
  
  const setFontColorToBlack = async () => {
    chartRef.current.options.scales = blackScales;
    chartRef.current.options.plugins.legend = blackLegend;
    chartRef.current.update();
    await new Promise(resolve => setTimeout(resolve, 20));
  };
   
  const setFontColorToWhite = async () => {
    chartRef.current.options.scales = whiteScales;
    chartRef.current.options.plugins.legend = whiteLegend;
    chartRef.current.update();
    await new Promise(resolve => setTimeout(resolve, 20));
  };

  return (
    <button type="button" onClick={downloadImage}>
      Download
    </button>
  );
};



export default DownloaderComp;
