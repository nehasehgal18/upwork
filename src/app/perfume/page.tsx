"use client";

import React, { useState, useEffect } from 'react';

export default function PerfumeRevenueCalculator() {
  const [unitPrice, setUnitPrice] = useState<number>(50);
  const [numberOfSales, setNumberOfSales] = useState<number>(100);
  const [productionCost, setProductionCost] = useState<number>(20);
  const [marketingBudget, setMarketingBudget] = useState<number>(1000);
  const [totalRevenue, setTotalRevenue] = useState<number | null>(null);
  const [totalProfit, setTotalProfit] = useState<number | null>(null);

  const calculateRevenue = () => {
    const revenue = unitPrice * numberOfSales;
    const costs = (productionCost * numberOfSales) + marketingBudget;
    const profit = revenue - costs;
    setTotalRevenue(revenue);
    setTotalProfit(profit);
  };

  useEffect(() => {
    calculateRevenue();
  }, [unitPrice, numberOfSales, productionCost, marketingBudget]);

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Perfume Revenue Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="unitPrice" className="block mb-2 font-medium">Unit Price ($): {unitPrice}</label>
          <input
            type="range"
            id="unitPrice"
            value={unitPrice}
            onChange={(e) => setUnitPrice(Number(e.target.value))}
            className="w-full"
            min="10"
            max="500"
          />
          <input
            type="number"
            value={unitPrice}
            onChange={(e) => setUnitPrice(Number(e.target.value))}
            className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter unit price"
            min="10"
            max="500"
          />
        </div>
        
        <div>
          <label htmlFor="numberOfSales" className="block mb-2 font-medium">Number of Sales: {numberOfSales}</label>
          <input
            type="range"
            id="numberOfSales"
            value={numberOfSales}
            onChange={(e) => setNumberOfSales(Number(e.target.value))}
            className="w-full"
            min="0"
            max="1000"
          />
          <input
            type="number"
            value={numberOfSales}
            onChange={(e) => setNumberOfSales(Number(e.target.value))}
            className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter number of sales"
            min="0"
            max="1000"
          />
        </div>
        
        <div>
          <label htmlFor="productionCost" className="block mb-2 font-medium">Production Cost per Unit ($): {productionCost}</label>
          <input
            type="range"
            id="productionCost"
            value={productionCost}
            onChange={(e) => setProductionCost(Number(e.target.value))}
            className="w-full"
            min="5"
            max="100"
          />
          <input
            type="number"
            value={productionCost}
            onChange={(e) => setProductionCost(Number(e.target.value))}
            className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter production cost"
            min="5"
            max="100"
          />
        </div>
        
        <div>
          <label htmlFor="marketingBudget" className="block mb-2 font-medium">Marketing Budget ($): {marketingBudget}</label>
          <input
            type="range"
            id="marketingBudget"
            value={marketingBudget}
            onChange={(e) => setMarketingBudget(Number(e.target.value))}
            className="w-full"
            min="0"
            max="10000"
            step="100"
          />
          <input
            type="number"
            value={marketingBudget}
            onChange={(e) => setMarketingBudget(Number(e.target.value))}
            className="mt-2 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Enter marketing budget"
            min="0"
            max="10000"
            step="100"
          />
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Total Revenue:</h2>
          <p className="text-3xl text-green-600 font-bold">
            ${totalRevenue?.toFixed(2)}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Total Profit:</h2>
          <p className={`text-3xl font-bold ${totalProfit && totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            ${totalProfit?.toFixed(2)}
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