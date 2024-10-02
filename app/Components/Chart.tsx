import React, { useEffect,useState, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';


const Chart: React.FC = () => {
 
  const chartRef = useRef<HTMLCanvasElement | null>(null); // UseRef for canvas element
  const chartInstanceRef = useRef<ChartJS | null>(null); // To store the chart instance

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d'); // Get 2D context from the canvas

    if (ctx) {
      // Destroy the previous chart if it exists to prevent memory leaks
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

    
     

      // Create the new Chart instance
      const labels = ['egy', 'ketto', 'harom', 'negy'];
      chartInstanceRef.current = new ChartJS(ctx, {
        type: 'bar',
        data: {
          labels: labels, 
            datasets: [{
            data: [65, 59, 80, 90], // Corrected the data array to match the labels length
            backgroundColor: ['#ff9a00','#bd00ff','#01ff1f','#e3ff00' ], // Added background color for bars
            borderWidth: 1,
            borderRadius: 2,
            barPercentage: 0.9,
          }],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              grid: {
                color: 'gray', // Rácsvonal színe
                lineWidth: 1, // Rácsvonal vastagsága
              },
              beginAtZero: true, // Ensure Y-axis begins at 0
              ticks: {
                color:  'red', 
                font: {
                  size: 10, 
                },
              },  
            },
            x:{
              ticks: {
                color:  'red', 
                font: {
                  size: 10, 
                },
              },
            }
          },
        },
      });
    }

    // Cleanup function to destroy the chart instance when component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="flex justify-center text-center">
      <div className="h-1/3 w-1/2">
        <canvas ref={chartRef} width={'600'} height={'400'}></canvas> {/* Attach ref to the canvas */}
      </div>
    </div>
  );
};

export default Chart;
