"use client";

import React, { useState, useEffect } from 'react';

export default function BoxTruckRevenueCalculator() {
  const [numberOfTrucks, setNumberOfTrucks] = useState<number>(1);
  const [averageDailyRevenue, setAverageDailyRevenue] = useState<number>(500);
  const [daysOperatedPerWeek, setDaysOperatedPerWeek] = useState<number>(5);
  const [fuelCostPerMile, setFuelCostPerMile] = useState<number>(0.5);
  const [averageMilesPerDay, setAverageMilesPerDay] = useState<number>(100);
  const [maintenanceCostPerTruck, setMaintenanceCostPerTruck] = useState<number>(5000);
  const [insuranceCostPerTruck, setInsuranceCostPerTruck] = useState<number>(4000);
  const [driverSalaryPercentage, setDriverSalaryPercentage] = useState<number>(30);

  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [fuelCosts, setFuelCosts] = useState<number>(0);
  const [maintenanceCosts, setMaintenanceCosts] = useState<number>(0);
  const [insuranceCosts, setInsuranceCosts] = useState<number>(0);
  const [driverSalaries, setDriverSalaries] = useState<number>(0);
  const [totalCosts, setTotalCosts] = useState<number>(0);
  const [netProfit, setNetProfit] = useState<number>(0);

  const calculateRevenue = () => {
    const annualRevenue = numberOfTrucks * averageDailyRevenue * daysOperatedPerWeek * 52;
    const annualFuelCosts = numberOfTrucks * fuelCostPerMile * averageMilesPerDay * daysOperatedPerWeek * 52;
    const annualMaintenanceCosts = numberOfTrucks * maintenanceCostPerTruck;
    const annualInsuranceCosts = numberOfTrucks * insuranceCostPerTruck;
    const annualDriverSalaries = annualRevenue * (driverSalaryPercentage / 100);
    const annualTotalCosts = annualFuelCosts + annualMaintenanceCosts + annualInsuranceCosts + annualDriverSalaries;
    const annualNetProfit = annualRevenue - annualTotalCosts;

    setTotalRevenue(annualRevenue);
    setFuelCosts(annualFuelCosts);
    setMaintenanceCosts(annualMaintenanceCosts);
    setInsuranceCosts(annualInsuranceCosts);
    setDriverSalaries(annualDriverSalaries);
    setTotalCosts(annualTotalCosts);
    setNetProfit(annualNetProfit);
  };

  useEffect(() => {
    calculateRevenue();
  }, [numberOfTrucks, averageDailyRevenue, daysOperatedPerWeek, fuelCostPerMile, averageMilesPerDay, maintenanceCostPerTruck, insuranceCostPerTruck, driverSalaryPercentage]);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Box Truck Business Revenue Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="numberOfTrucks" className="block mb-2 font-medium">Number of Trucks</label>
          <input
            type="number"
            id="numberOfTrucks"
            value={numberOfTrucks}
            onChange={(e) => setNumberOfTrucks(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>
        
        <div>
          <label htmlFor="averageDailyRevenue" className="block mb-2 font-medium">Average Daily Revenue per Truck: {formatCurrency(averageDailyRevenue)}</label>
          <input
            type="range"
            id="averageDailyRevenue"
            value={averageDailyRevenue}
            onChange={(e) => setAverageDailyRevenue(Number(e.target.value))}
            className="w-full"
            min="100"
            max="2000"
            step="50"
          />
        </div>
        
        <div>
          <label htmlFor="daysOperatedPerWeek" className="block mb-2 font-medium">Days Operated per Week: {daysOperatedPerWeek}</label>
          <input
            type="range"
            id="daysOperatedPerWeek"
            value={daysOperatedPerWeek}
            onChange={(e) => setDaysOperatedPerWeek(Number(e.target.value))}
            className="w-full"
            min="1"
            max="7"
          />
        </div>
        
        <div>
          <label htmlFor="fuelCostPerMile" className="block mb-2 font-medium">Fuel Cost per Mile ($)</label>
          <input
            type="number"
            id="fuelCostPerMile"
            value={fuelCostPerMile}
            onChange={(e) => setFuelCostPerMile(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            step="0.01"
          />
        </div>
        
        <div>
          <label htmlFor="averageMilesPerDay" className="block mb-2 font-medium">Average Miles per Day per Truck: {averageMilesPerDay}</label>
          <input
            type="range"
            id="averageMilesPerDay"
            value={averageMilesPerDay}
            onChange={(e) => setAverageMilesPerDay(Number(e.target.value))}
            className="w-full"
            min="50"
            max="500"
            step="10"
          />
        </div>
        
        <div>
          <label htmlFor="maintenanceCostPerTruck" className="block mb-2 font-medium">Annual Maintenance Cost per Truck ($)</label>
          <input
            type="number"
            id="maintenanceCostPerTruck"
            value={maintenanceCostPerTruck}
            onChange={(e) => setMaintenanceCostPerTruck(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="insuranceCostPerTruck" className="block mb-2 font-medium">Annual Insurance Cost per Truck ($)</label>
          <input
            type="number"
            id="insuranceCostPerTruck"
            value={insuranceCostPerTruck}
            onChange={(e) => setInsuranceCostPerTruck(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="driverSalaryPercentage" className="block mb-2 font-medium">Driver Salary (% of Revenue): {driverSalaryPercentage}%</label>
          <input
            type="range"
            id="driverSalaryPercentage"
            value={driverSalaryPercentage}
            onChange={(e) => setDriverSalaryPercentage(Number(e.target.value))}
            className="w-full"
            min="10"
            max="50"
          />
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Revenue:</h2>
          <p className="text-2xl text-blue-600 font-bold">{formatCurrency(totalRevenue)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Fuel Costs:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(fuelCosts)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Maintenance Costs:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(maintenanceCosts)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Insurance Costs:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(insuranceCosts)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Driver Salaries:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(driverSalaries)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Total Annual Costs:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(totalCosts)}</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">Annual Net Profit:</h2>
          <p className={`text-3xl font-bold ${netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(netProfit)}
          </p>
        </div>
      </div>
      
      <button
        onClick={calculateRevenue}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
      >
        Recalculate
      </button>
    </div>
  );
}