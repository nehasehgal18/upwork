"use client";

import React, { useState, useEffect } from 'react';

export default function HotShotTruckingCalculator() {
  const [averageMileRate, setAverageMileRate] = useState<number>(2.5);
  const [milesPerTrip, setMilesPerTrip] = useState<number>(500);
  const [tripsPerMonth, setTripsPerMonth] = useState<number>(12);
  const [fuelPricePerGallon, setFuelPricePerGallon] = useState<number>(3.5);
  const [milesPerGallon, setMilesPerGallon] = useState<number>(8);
  const [monthlyLoanPayment, setMonthlyLoanPayment] = useState<number>(1500);
  const [monthlyInsurance, setMonthlyInsurance] = useState<number>(1000);
  const [maintenanceCostPerMile, setMaintenanceCostPerMile] = useState<number>(0.15);
  const [driverPayPercentage, setDriverPayPercentage] = useState<number>(25);

  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(0);
  const [monthlyFuelCost, setMonthlyFuelCost] = useState<number>(0);
  const [monthlyMaintenanceCost, setMonthlyMaintenanceCost] = useState<number>(0);
  const [monthlyDriverPay, setMonthlyDriverPay] = useState<number>(0);
  const [monthlyTotalExpenses, setMonthlyTotalExpenses] = useState<number>(0);
  const [monthlyNetProfit, setMonthlyNetProfit] = useState<number>(0);

  const calculateFinancials = () => {
    const totalMilesPerMonth = milesPerTrip * tripsPerMonth;
    const revenue = totalMilesPerMonth * averageMileRate;
    const fuelCost = (totalMilesPerMonth / milesPerGallon) * fuelPricePerGallon;
    const maintenanceCost = totalMilesPerMonth * maintenanceCostPerMile;
    const driverPay = revenue * (driverPayPercentage / 100);
    const totalExpenses = fuelCost + maintenanceCost + monthlyLoanPayment + monthlyInsurance + driverPay;
    const netProfit = revenue - totalExpenses;

    setMonthlyRevenue(revenue);
    setMonthlyFuelCost(fuelCost);
    setMonthlyMaintenanceCost(maintenanceCost);
    setMonthlyDriverPay(driverPay);
    setMonthlyTotalExpenses(totalExpenses);
    setMonthlyNetProfit(netProfit);
  };

  useEffect(() => {
    calculateFinancials();
  }, [averageMileRate, milesPerTrip, tripsPerMonth, fuelPricePerGallon, milesPerGallon, monthlyLoanPayment, monthlyInsurance, maintenanceCostPerMile, driverPayPercentage]);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Hot Shot Trucking Business Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="averageMileRate" className="block mb-2 font-medium">Average Rate per Mile: {formatCurrency(averageMileRate)}</label>
          <input
            type="range"
            id="averageMileRate"
            value={averageMileRate}
            onChange={(e) => setAverageMileRate(Number(e.target.value))}
            className="w-full"
            min="1"
            max="5"
            step="0.1"
          />
        </div>
        
        <div>
          <label htmlFor="milesPerTrip" className="block mb-2 font-medium">Average Miles per Trip</label>
          <input
            type="number"
            id="milesPerTrip"
            value={milesPerTrip}
            onChange={(e) => setMilesPerTrip(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="tripsPerMonth" className="block mb-2 font-medium">Trips per Month: {tripsPerMonth}</label>
          <input
            type="range"
            id="tripsPerMonth"
            value={tripsPerMonth}
            onChange={(e) => setTripsPerMonth(Number(e.target.value))}
            className="w-full"
            min="1"
            max="30"
            step="1"
          />
        </div>
        
        <div>
          <label htmlFor="fuelPricePerGallon" className="block mb-2 font-medium">Fuel Price per Gallon ($)</label>
          <input
            type="number"
            id="fuelPricePerGallon"
            value={fuelPricePerGallon}
            onChange={(e) => setFuelPricePerGallon(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
            step="0.01"
          />
        </div>
        
        <div>
          <label htmlFor="milesPerGallon" className="block mb-2 font-medium">Miles per Gallon: {milesPerGallon}</label>
          <input
            type="range"
            id="milesPerGallon"
            value={milesPerGallon}
            onChange={(e) => setMilesPerGallon(Number(e.target.value))}
            className="w-full"
            min="4"
            max="12"
            step="0.5"
          />
        </div>
        
        <div>
          <label htmlFor="monthlyLoanPayment" className="block mb-2 font-medium">Monthly Loan Payment ($)</label>
          <input
            type="number"
            id="monthlyLoanPayment"
            value={monthlyLoanPayment}
            onChange={(e) => setMonthlyLoanPayment(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="monthlyInsurance" className="block mb-2 font-medium">Monthly Insurance ($)</label>
          <input
            type="number"
            id="monthlyInsurance"
            value={monthlyInsurance}
            onChange={(e) => setMonthlyInsurance(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="maintenanceCostPerMile" className="block mb-2 font-medium">Maintenance Cost per Mile: {formatCurrency(maintenanceCostPerMile)}</label>
          <input
            type="range"
            id="maintenanceCostPerMile"
            value={maintenanceCostPerMile}
            onChange={(e) => setMaintenanceCostPerMile(Number(e.target.value))}
            className="w-full"
            min="0.05"
            max="0.5"
            step="0.01"
          />
        </div>
        
        <div>
          <label htmlFor="driverPayPercentage" className="block mb-2 font-medium">Driver Pay (% of Revenue): {driverPayPercentage}%</label>
          <input
            type="range"
            id="driverPayPercentage"
            value={driverPayPercentage}
            onChange={(e) => setDriverPayPercentage(Number(e.target.value))}
            className="w-full"
            min="10"
            max="50"
            step="1"
          />
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Monthly Revenue:</h2>
          <p className="text-2xl text-blue-600 font-bold">{formatCurrency(monthlyRevenue)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Monthly Fuel Cost:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(monthlyFuelCost)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Monthly Maintenance Cost:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(monthlyMaintenanceCost)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Monthly Driver Pay:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(monthlyDriverPay)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Total Monthly Expenses:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(monthlyTotalExpenses)}</p>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">Monthly Net Profit:</h2>
          <p className={`text-3xl font-bold ${monthlyNetProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(monthlyNetProfit)}
          </p>
        </div>
      </div>
      
      <button
        onClick={calculateFinancials}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
      >
        Recalculate
      </button>
    </div>
  );
}