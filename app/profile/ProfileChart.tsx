import React, { useEffect,useState, useRef } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';


const ProfileChart: React.FC = () => {
 
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
      const labels = ['Mon', 'Thues', 'Wed', 'Thur'];
      chartInstanceRef.current = new ChartJS(ctx, {
        type: 'line',
        data: {
          labels: labels, 
            datasets: [{
            data: [65, 59, 80, 81, 56, 55, 40], 
            borderColor: 'rgb(255, 255, 255, 255)',
            borderWidth: 1,
            tension: 0.1
          }],
        },
        options: {
            scales: {
                x: {
                  grid: {
                    display: false
                  }
                },
                y: {
                  grid: {
                    display: false
                  }
                }
              },
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false
            },
          },
        }
        
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
    <div className="">
      <div>
        <canvas ref={chartRef} width={'600'} height={'400'}></canvas> {/* Attach ref to the canvas */}
      </div>
    </div>
  );
};

export default ProfileChart;
