// // Downloader.js
// import React, { useCallback } from 'react';

// const DownloaderComp = ({ chartRef, onImageDownload }) => {
//   const downloadImage = useCallback(() => {
//     // const link = document.createElement('a');
//     // link.download = 'chart.png';
//     // link.href = chartRef.current.toBase64Image();
//     // link.click();

//     console.log(123);//todo del
//     // Pass the base64 image string to the parent component
//     const imageBase64 = chartRef.current.toBase64Image();
//     onImageDownload(imageBase64);
//   }, [chartRef, onImageDownload]);

//   return (
//     <button type="button" onClick={downloadImage}>
//       Download
//     </button>
//   );
// };

// export default DownloaderComp;



// Downloader.js
import React, { useCallback } from 'react';

const DownloaderComp = ({ chartRef, onImageDownload }) => {
  const blackLegend =  {
    display: true,
    position: 'top',
    labels: {
      color: 'black', // Schriftfarbe der Legende auf weiß setzen
    },
  }
  const blackScales = {
    x: {
      type: 'linear',
      position: 'bottom',
      ticks: {
        color: 'red', // Schriftfarbe der X-Achse auf weiß setzen
      },
      grid: {
        color: 'red', // Gitterlinienfarbe auf weiß setzen
      },
      title: {
        display: true,
        text: 'Time in Seconds',
        color: 'red', // Achsentitel-Farbe auf weiß setzen
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        color: 'black', // Schriftfarbe der Y-Achse auf weiß setzen
      },
      grid: {
        color: 'black', // Gitterlinienfarbe auf weiß setzen
      },
      title: {
        display: true,
        text: 'Temperature in °C',
        color: 'black', // Achsentitel-Farbe auf weiß setzen
      },
    }
  };

  const downloadImage = useCallback(async () => {
    setFontColorToBlack(chartRef); // Warte auf Abschluss von setFontColorToBlack


    chartRef.current.options.scales = blackScales;
    chartRef.current.options.plugins.legend = blackLegend;
    chartRef.current.update();

    // Führe die weiteren Schritte aus, um das Bild herunterzuladen
    const imageBase64 = chartRef.current.toBase64Image();


    onImageDownload(imageBase64);

 
    // Nachdem das Bild heruntergeladen wurde, setze die Schriftfarben wieder zurück
    // setFontColorToWhite(chartRef);
  }, [chartRef, onImageDownload]);




  const setFontColorToBlack = (chartRef) => {
    console.log(chartRef.current);

   
    console.log(chartRef.current)

    chartRef.current.options.scales = blackScales;
    console.log(chartRef.current)
    console.log(chartRef.current.options)
    chartRef.current.options.plugins.legend = blackLegend;
    chartRef.current.update();

    console.log(1);

  };




  
  const setFontColorToWhite =  (chartRef) => {
    console.log(chartRef);
    const whiteScales = {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          color: 'green', // Schriftfarbe der X-Achse auf weiß setzen
        },
        grid: {
          color: 'green', // Gitterlinienfarbe auf weiß setzen
        },
        title: {
          display: true,
          text: 'Time in Seconds',
          color: 'green', // Achsentitel-Farbe auf weiß setzen
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'green', // Schriftfarbe der Y-Achse auf weiß setzen
        },
        grid: {
          color: 'white', // Gitterlinienfarbe auf weiß setzen
        },
        title: {
          display: true,
          text: 'Temperature in °C',
          color: 'white', // Achsentitel-Farbe auf weiß setzen
        },
      }
    };
    const whiteLegend =  {
      display: true,
      position: 'top',
      labels: {
        color: 'white', // Schriftfarbe der Legende auf weiß setzen
      },
    }

    chartRef.current.options.scales = whiteScales;
    chartRef.current.options.plugins.legend = whiteLegend;
    chartRef.current.update();
  };



  return (
    <button type="button" onClick={downloadImage}>
      Download
    </button>
  );
};

export default DownloaderComp;
