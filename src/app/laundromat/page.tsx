"use client";

import React, { useState, useEffect } from 'react';

export default function LaundryRevenueCalculator() {
  const [averageWashPrice, setAverageWashPrice] = useState<number>(3);
  const [averageDryPrice, setAverageDryPrice] = useState<number>(2);
  const [averageLoadsPerDay, setAverageLoadsPerDay] = useState<number>(50);
  const [daysOperatedPerWeek, setDaysOperatedPerWeek] = useState<number>(7);
  const [utilityExpensePercentage, setUtilityExpensePercentage] = useState<number>(30);
  const [rentExpense, setRentExpense] = useState<number>(2000);
  const [employeeSalaries, setEmployeeSalaries] = useState<number>(4000);
  const [maintenanceCost, setMaintenanceCost] = useState<number>(500);

  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [utilityCosts, setUtilityCosts] = useState<number>(0);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);
  const [netProfit, setNetProfit] = useState<number>(0);

  const calculateRevenue = () => {
    const dailyRevenue = (averageWashPrice + averageDryPrice) * averageLoadsPerDay;
    const annualRevenue = dailyRevenue * daysOperatedPerWeek * 52;
    const annualUtilityCosts = annualRevenue * (utilityExpensePercentage / 100);
    const annualRent = rentExpense * 12;
    const annualSalaries = employeeSalaries * 12;
    const annualMaintenance = maintenanceCost * 12;
    const annualTotalExpenses = annualUtilityCosts + annualRent + annualSalaries + annualMaintenance;
    const annualNetProfit = annualRevenue - annualTotalExpenses;

    setTotalRevenue(annualRevenue);
    setUtilityCosts(annualUtilityCosts);
    setTotalExpenses(annualTotalExpenses);
    setNetProfit(annualNetProfit);
  };

  useEffect(() => {
    calculateRevenue();
  }, [averageWashPrice, averageDryPrice, averageLoadsPerDay, daysOperatedPerWeek, utilityExpensePercentage, rentExpense, employeeSalaries, maintenanceCost]);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Laundromat Business Revenue Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="averageWashPrice" className="block mb-2 font-medium">Average Wash Price: {formatCurrency(averageWashPrice)}</label>
          <input
            type="range"
            id="averageWashPrice"
            value={averageWashPrice}
            onChange={(e) => setAverageWashPrice(Number(e.target.value))}
            className="w-full"
            min="1"
            max="10"
            step="0.5"
          />
        </div>
        
        <div>
          <label htmlFor="averageDryPrice" className="block mb-2 font-medium">Average Dry Price: {formatCurrency(averageDryPrice)}</label>
          <input
            type="range"
            id="averageDryPrice"
            value={averageDryPrice}
            onChange={(e) => setAverageDryPrice(Number(e.target.value))}
            className="w-full"
            min="0.5"
            max="5"
            step="0.25"
          />
        </div>
        
        <div>
          <label htmlFor="averageLoadsPerDay" className="block mb-2 font-medium">Average Loads per Day: {averageLoadsPerDay}</label>
          <input
            type="range"
            id="averageLoadsPerDay"
            value={averageLoadsPerDay}
            onChange={(e) => setAverageLoadsPerDay(Number(e.target.value))}
            className="w-full"
            min="10"
            max="200"
            step="5"
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
          <label htmlFor="utilityExpensePercentage" className="block mb-2 font-medium">Utility Expense (% of Revenue): {utilityExpensePercentage}%</label>
          <input
            type="range"
            id="utilityExpensePercentage"
            value={utilityExpensePercentage}
            onChange={(e) => setUtilityExpensePercentage(Number(e.target.value))}
            className="w-full"
            min="10"
            max="50"
          />
        </div>
        
        <div>
          <label htmlFor="rentExpense" className="block mb-2 font-medium">Monthly Rent Expense ($)</label>
          <input
            type="number"
            id="rentExpense"
            value={rentExpense}
            onChange={(e) => setRentExpense(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="employeeSalaries" className="block mb-2 font-medium">Monthly Employee Salaries ($)</label>
          <input
            type="number"
            id="employeeSalaries"
            value={employeeSalaries}
            onChange={(e) => setEmployeeSalaries(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="maintenanceCost" className="block mb-2 font-medium">Monthly Maintenance Cost ($)</label>
          <input
            type="number"
            id="maintenanceCost"
            value={maintenanceCost}
            onChange={(e) => setMaintenanceCost(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Revenue:</h2>
          <p className="text-2xl text-blue-600 font-bold">{formatCurrency(totalRevenue)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Annual Utility Costs:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(utilityCosts)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Total Annual Expenses:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(totalExpenses)}</p>
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