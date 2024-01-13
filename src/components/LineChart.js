// LineChart.js
import { Line } from 'react-chartjs-2';
import React, { useRef, useCallback, useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import LineChart from '../components/LineChart'

const initialData = [
  { sec: 0, motor: 90, gearbox: 70, exhaust: 80 },
  // Add more data points if necessary
];

const LineChartComp = React.forwardRef((props, ref) => {
  const [data, setData] = useState(initialData);

  const updateData = () => {
    // Simulate data update
    const newData = [...data];
    newData.push({
      sec: newData[newData.length - 1].sec + 1,
      motor: Math.floor(190 - Math.random() * 70),
    });
    setData(newData.slice(-50)); // Limit data to the last 50 values
  };

  useEffect(() => {
    const intervalId = setInterval(updateData, 1000);
    return () => clearInterval(intervalId);
  }, [data]);


  const chartData = {
    labels: data.map((dataPoint) => dataPoint.sec),
    datasets: [
      {
        label: 'Motor Temperature',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(0,0,0,0)', // Hintergrundfarbe auf transparent setzen
        borderColor: 'orange', // Linienfarbe auf orange setzen
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.map((dataPoint) => dataPoint.motor),
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          color: 'white', // Schriftfarbe der X-Achse auf weiß setzen
        },
        grid: {
          color: 'white', // Gitterlinienfarbe auf weiß setzen
        },
        title: {
          display: true,
          text: 'Time in Seconds',
          color: 'white', // Achsentitel-Farbe auf weiß setzen
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', // Schriftfarbe der Y-Achse auf weiß setzen
        },
        grid: {
          color: 'white', // Gitterlinienfarbe auf weiß setzen
        },
        title: {
          display: true,
          text: 'Temperature in °C',
          color: 'white', // Achsentitel-Farbe auf weiß setzen
        },
      },
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'horizontal',
          scaleID: 'y',
          value: Math.max(...data.map((dataPoint) => dataPoint.motor)),
          borderColor: 'red',
          borderWidth: 2,
          label: {
            content: 'Max Wert',
            enabled: true,
            fontColor: 'white', // Schriftfarbe der Annotation auf weiß setzen
          },
        },
      ],
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'white', // Schriftfarbe der Legende auf weiß setzen
        },
      }
    },
    elements: {
      line: {
        tension: 0.4, // Ändern der Linientension
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 50,
        right: 50,
        top: 20,
        bottom: 20,
      },
    },
  };

  Chart.register(CategoryScale);

  return (
    <div>
      <h2>Line Chart with Max Value Line</h2>
      <Line
        style={{
          maxWidth: '500px',
          maxHeight: '500px',
          // background: 'linear-gradient(to bottom, #333, #000)',
          background: 'linear-gradient(to bottom, green, red)',
        }}
        ref={ref} data={chartData} options={options}
      />
    </div>
  );
});

export default LineChartComp;


