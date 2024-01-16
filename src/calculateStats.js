export const calculateTempStats = (data) => {
    if (!data || data.length < 2) {
      return null;
    }
  
    let maxTemp = -Infinity;
    let minTemp = Infinity;
    let totalTemp = 0;
  
    let maxSec, minSec;
  
    for (let i = 1; i < data.length; i++) {
      const { sec, temp } = data[i];
  
      // Maximaltemperatur
      if (temp > maxTemp) {
        maxTemp = temp;
        maxSec = sec;
      }
  
      // Minimaltemperatur
      if (temp < minTemp) {
        minTemp = temp;
        minSec = sec;
      }
  
      // Gesamttemperatur für Durchschnittsberechnung
      totalTemp += temp;
    }
  
    const meanTemp = Math.round(totalTemp / (data.length - 1));
    maxTemp = Math.round(maxTemp);
    minTemp = Math.round(minTemp);
  

    return {
        mean: {
            label: 'Mean Temperature:',
            value: meanTemp + ' °C',
        },
        min: {
            label: 'Min. Temperature:',
            value: minTemp + ' °C | ' + minSec + ' Seconds',
        },
        max: {
            label: 'Max. Temperature:',
            value: maxTemp + ' °C | ' + maxSec + ' Seconds'

        }
    }
  };
  