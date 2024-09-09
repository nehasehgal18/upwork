'use client';

import React, { useState, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas'; // Importing html2canvas for capturing the chart

export default function TrumpRiskIndexPage() {
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [animate, setAnimate] = useState(false);
  const chartRef = useRef(null); // Reference to the chart container

  const data = [
    { country: 'Costa Rica', score: 100, flag: '🇨🇷' },
    { country: 'Panama', score: 100, flag: '🇵🇦' },
    { country: 'Germany', score: 72.8, flag: '🇩🇪' },
    { country: 'Bulgaria', score: 66.5, flag: '🇧🇬' },
    { country: 'Japan', score: 65.3, flag: '🇯🇵' },
    { country: 'Bahrain', score: 60.7, flag: '🇧🇭' },
    { country: 'Ireland', score: 60.5, flag: '🇮🇪' },
    { country: 'Malta', score: 59.2, flag: '🇲🇹' },
    { country: 'Guatemala', score: 58.7, flag: '🇬🇹' },
    { country: 'Estonia', score: 58.5, flag: '🇪🇪' },
  ];

  const maxScore = Math.max(...data.map(item => item.score));

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Function to handle download as JPEG
  const downloadChart = () => {
    if (chartRef.current) {
      html2canvas(chartRef.current).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/jpeg');
        link.download = 'trump-risk-index.jpg';
        link.click();
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div ref={chartRef} className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-white rounded-full overflow-hidden mr-4">
            <div className="w-full h-full bg-gray-800 relative flex items-center justify-center">
              <div className="absolute w-3/4 h-full bg-white rounded-full transform rotate-45"></div>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-wide">
            TRUMP RISK INDEX
          </h1>
        </div>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">SECURITY</h2>
        <p className="mb-6 text-gray-300">
          The countries most exposed to security policy changes under a Trump presidency.
        </p>
        <p className="mb-8 text-sm text-gray-400">
          Index scores are based on an assessment of exposure/vulnerability across security indicators such as defense spending and U.S. military aid.
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-sm text-gray-400 h-full">
            <span className="text-xl font-semibold self-center">High Exposure</span>
            <span className="text-xl font-semibold self-center">Low Exposure</span>
          </div>
          <svg width="100%" height={data.length * 60 + 50} className="ml-24">
            {data.map((item, index) => (
              <g
                key={item.country}
                transform={`translate(0, ${index * 60})`}
                onMouseEnter={() => setActiveCountry(item.country)}
                onMouseLeave={() => setActiveCountry(null)}
                className="cursor-pointer"
              >
                <rect
                  x="150"  // Adjusted to make space for the country name at the start
                  y="15"
                  width="0"
                  height="35"
                  fill={`hsl(${(index / data.length) * 360}, 100%, 50%)`}
                  className="transition-all duration-1000 ease-out"
                  style={{
                    width: animate ? `${(item.score / maxScore) * 70}%` : '0%',
                    filter: activeCountry === item.country ? 'brightness(1.3)' : 'none',
                  }}
                />
                <text
                  x="0"  // Position at the start of the bar
                  y="35"
                  fill="white"
                  fontSize="14"
                  fontWeight="bold"
                  className={`transition-all duration-300 ${activeCountry === item.country ? 'font-bold text-lg' : ''}`}
                >
                  {item.flag} {item.country}
                </text>
                <text
                  x={`${(item.score / maxScore) * 70}%`}
                  y="35"
                  textAnchor="end"
                  fill="white"
                  fontSize="16"
                  fontWeight="bold"
                  dx="-10"
                  className="transition-opacity duration-500"
                  style={{ opacity: animate ? 1 : 0 }}
                >
                  {item.score}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="mt-8 text-sm text-gray-400 text-right">
          Source: The Economist
        </div>
      </div>
      <button
        onClick={downloadChart}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
      >
        Download Chart as JPEG
      </button>
    </div>
  );
}
