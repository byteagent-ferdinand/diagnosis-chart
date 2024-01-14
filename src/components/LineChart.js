
import { Line } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

const initialData = [
  { sec: 0, motor: 90, gearbox: 70, exhaust: 80 },
];

Chart.register(CategoryScale);

const LineChartComp = React.forwardRef((props, ref) => {
  const [data, setData] = useState(initialData);
  const [isGeneratingData, setIsGeneratingData] = useState(true);

  const updateData = () => {
    if (isGeneratingData) {
      const newData = [...data];
      newData.push({
        sec: newData[newData.length - 1].sec + 1,
        motor: Math.floor(190 - Math.random() * 70),
      });
      setData(newData.slice(-50));
    }
  };
  
  useEffect(() => {
    if (ref && ref.current) {
      ref.current.stopDataGeneration =  async () => {
        setIsGeneratingData(false);
        await new Promise(resolve => setTimeout(resolve, 20));
      };
    }

    const intervalId = setInterval(() => {
      updateData();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [data, isGeneratingData]);

  const chartData = {
    labels: data.map((dataPoint) => dataPoint.sec),
    datasets: [
      {
        label: 'Motor Temperature',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'orange',
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

  var options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'white',
        },
        title: {
          display: true,
          text: 'Time in Seconds',
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'white'},
          title: {
          display: true,
          text: 'Temperature in °C',
          color: 'white'
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
          borderColor: 'black',
          borderWidth: 2,
          label: {
            content: 'Max Wert',
            enabled: true,
            fontColor: 'white'
          },
        },
      ],
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: 'white'
        },
      }
    },
    elements: {
      line: {
        tension: 0.4
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
    }
  };

  return (
    <Line
      style={{
        maxWidth: '500px',
        maxHeight: '500px',
        marginTop: '20px',
        marginBottom: '20px',
        background: 'linear-gradient(to bottom, #333, #000)',
      }}
      ref={ref}
      data={chartData}
      options={options}/>
  );
});

export default LineChartComp;



