"use client";

import React, { useState, useEffect } from 'react';

export default function ResortRevenueCalculator() {
  const [numberOfRooms, setNumberOfRooms] = useState<number>(100);
  const [averageRoomRate, setAverageRoomRate] = useState<number>(200);
  const [occupancyRate, setOccupancyRate] = useState<number>(70);
  const [averageStayDuration, setAverageStayDuration] = useState<number>(3);
  const [foodBeverageRevenuePerGuest, setFoodBeverageRevenuePerGuest] = useState<number>(50);
  const [additionalServicesRevenuePerGuest, setAdditionalServicesRevenuePerGuest] = useState<number>(30);
  const [operatingCostsPercentage, setOperatingCostsPercentage] = useState<number>(60);
  const [marketingBudgetPercentage, setMarketingBudgetPercentage] = useState<number>(5);

  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [roomRevenue, setRoomRevenue] = useState<number>(0);
  const [foodBeverageRevenue, setFoodBeverageRevenue] = useState<number>(0);
  const [additionalServicesRevenue, setAdditionalServicesRevenue] = useState<number>(0);
  const [operatingCosts, setOperatingCosts] = useState<number>(0);
  const [marketingCosts, setMarketingCosts] = useState<number>(0);
  const [netProfit, setNetProfit] = useState<number>(0);

  const calculateRevenue = () => {
    const dailyOccupiedRooms = Math.round(numberOfRooms * (occupancyRate / 100));
    const annualOccupiedRoomNights = dailyOccupiedRooms * 365;
    
    const annualRoomRevenue = annualOccupiedRoomNights * averageRoomRate;
    const annualGuests = annualOccupiedRoomNights / averageStayDuration;
    
    const annualFBRevenue = annualGuests * foodBeverageRevenuePerGuest * averageStayDuration;
    const annualAdditionalRevenue = annualGuests * additionalServicesRevenuePerGuest * averageStayDuration;
    
    const totalAnnualRevenue = annualRoomRevenue + annualFBRevenue + annualAdditionalRevenue;
    
    const annualOperatingCosts = totalAnnualRevenue * (operatingCostsPercentage / 100);
    const annualMarketingCosts = totalAnnualRevenue * (marketingBudgetPercentage / 100);
    
    const annualNetProfit = totalAnnualRevenue - annualOperatingCosts - annualMarketingCosts;

    setRoomRevenue(annualRoomRevenue);
    setFoodBeverageRevenue(annualFBRevenue);
    setAdditionalServicesRevenue(annualAdditionalRevenue);
    setTotalRevenue(totalAnnualRevenue);
    setOperatingCosts(annualOperatingCosts);
    setMarketingCosts(annualMarketingCosts);
    setNetProfit(annualNetProfit);
  };

  useEffect(() => {
    calculateRevenue();
  }, [numberOfRooms, averageRoomRate, occupancyRate, averageStayDuration, foodBeverageRevenuePerGuest, additionalServicesRevenuePerGuest, operatingCostsPercentage, marketingBudgetPercentage]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Resort Business Revenue Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="numberOfRooms" className="block mb-2 font-medium">Number of Rooms</label>
          <input
            type="number"
            id="numberOfRooms"
            value={numberOfRooms}
            onChange={(e) => setNumberOfRooms(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>
        
        <div>
          <label htmlFor="averageRoomRate" className="block mb-2 font-medium">Average Room Rate ($)</label>
          <input
            type="number"
            id="averageRoomRate"
            value={averageRoomRate}
            onChange={(e) => setAverageRoomRate(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="occupancyRate" className="block mb-2 font-medium">Occupancy Rate (%): {occupancyRate}</label>
          <input
            type="range"
            id="occupancyRate"
            value={occupancyRate}
            onChange={(e) => setOccupancyRate(Number(e.target.value))}
            className="w-full"
            min="0"
            max="100"
          />
        </div>
        
        <div>
          <label htmlFor="averageStayDuration" className="block mb-2 font-medium">Average Stay Duration (nights)</label>
          <input
            type="number"
            id="averageStayDuration"
            value={averageStayDuration}
            onChange={(e) => setAverageStayDuration(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>
        
        <div>
          <label htmlFor="foodBeverageRevenuePerGuest" className="block mb-2 font-medium">F&B Revenue per Guest per Day ($)</label>
          <input
            type="number"
            id="foodBeverageRevenuePerGuest"
            value={foodBeverageRevenuePerGuest}
            onChange={(e) => setFoodBeverageRevenuePerGuest(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="additionalServicesRevenuePerGuest" className="block mb-2 font-medium">Additional Services Revenue per Guest per Day ($)</label>
          <input
            type="number"
            id="additionalServicesRevenuePerGuest"
            value={additionalServicesRevenuePerGuest}
            onChange={(e) => setAdditionalServicesRevenuePerGuest(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="operatingCostsPercentage" className="block mb-2 font-medium">Operating Costs (% of Revenue): {operatingCostsPercentage}</label>
          <input
            type="range"
            id="operatingCostsPercentage"
            value={operatingCostsPercentage}
            onChange={(e) => setOperatingCostsPercentage(Number(e.target.value))}
            className="w-full"
            min="0"
            max="100"
          />
        </div>
        
        <div>
          <label htmlFor="marketingBudgetPercentage" className="block mb-2 font-medium">Marketing Budget (% of Revenue): {marketingBudgetPercentage}</label>
          <input
            type="range"
            id="marketingBudgetPercentage"
            value={marketingBudgetPercentage}
            onChange={(e) => setMarketingBudgetPercentage(Number(e.target.value))}
            className="w-full"
            min="0"
            max="20"
          />
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Room Revenue:</h2>
          <p className="text-2xl text-blue-600 font-bold">${roomRevenue.toFixed(2)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual F&B Revenue:</h2>
          <p className="text-2xl text-blue-600 font-bold">${foodBeverageRevenue.toFixed(2)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Additional Services Revenue:</h2>
          <p className="text-2xl text-blue-600 font-bold">${additionalServicesRevenue.toFixed(2)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Total Annual Revenue:</h2>
          <p className="text-3xl text-green-600 font-bold">${totalRevenue.toFixed(2)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Operating Costs:</h2>
          <p className="text-2xl text-red-600 font-bold">${operatingCosts.toFixed(2)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Marketing Costs:</h2>
          <p className="text-2xl text-red-600 font-bold">${marketingCosts.toFixed(2)}</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">Annual Net Profit:</h2>
          <p className={`text-3xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${netProfit.toFixed(2)}
          </p>
        </div>
      </div>
      
      <button
        onClick={calculateRevenue}
        className="mt-6 w-full bg-yellow-700 text-white py-3 rounded-md hover:bg-yellow-800 transition-colors font-medium"
      >
        Recalculate
      </button>
    </div>
  );
}