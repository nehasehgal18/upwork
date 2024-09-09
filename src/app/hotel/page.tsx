"use client";

import React, { useState, useEffect } from 'react';

export default function HotelBusinessCalculator() {
  const [averageRoomRate, setAverageRoomRate] = useState<number>(120);
  const [roomsBookedPerDay, setRoomsBookedPerDay] = useState<number>(40);
  const [daysOpenPerMonth, setDaysOpenPerMonth] = useState<number>(30);
  const [occupancyCostPercentage, setOccupancyCostPercentage] = useState<number>(35);
  const [rentPerMonth, setRentPerMonth] = useState<number>(10000);
  const [staffCostPerMonth, setStaffCostPerMonth] = useState<number>(15000);
  const [utilitiesPerMonth, setUtilitiesPerMonth] = useState<number>(3000);
  const [maintenanceCostPerMonth, setMaintenanceCostPerMonth] = useState<number>(2000);
  const [marketingCostPerMonth, setMarketingCostPerMonth] = useState<number>(1500);

  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(0);
  const [monthlyCostOfGoods, setMonthlyCostOfGoods] = useState<number>(0);
  const [monthlyOperatingExpenses, setMonthlyOperatingExpenses] = useState<number>(0);
  const [monthlyNetProfit, setMonthlyNetProfit] = useState<number>(0);

  const calculateFinancials = () => {
    const revenue = averageRoomRate * roomsBookedPerDay * daysOpenPerMonth;
    const costOfGoods = revenue * (occupancyCostPercentage / 100);
    const operatingExpenses = rentPerMonth + staffCostPerMonth + utilitiesPerMonth + maintenanceCostPerMonth + marketingCostPerMonth;
    const netProfit = revenue - costOfGoods - operatingExpenses;

    setMonthlyRevenue(revenue);
    setMonthlyCostOfGoods(costOfGoods);
    setMonthlyOperatingExpenses(operatingExpenses);
    setMonthlyNetProfit(netProfit);
  };

  useEffect(() => {
    calculateFinancials();
  }, [averageRoomRate, roomsBookedPerDay, daysOpenPerMonth, occupancyCostPercentage, rentPerMonth, staffCostPerMonth, utilitiesPerMonth, maintenanceCostPerMonth, marketingCostPerMonth]);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Hotel Business Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="averageRoomRate" className="block mb-2 font-medium">Average Room Rate: {formatCurrency(averageRoomRate)}</label>
          <input
            type="range"
            id="averageRoomRate"
            value={averageRoomRate}
            onChange={(e) => setAverageRoomRate(Number(e.target.value))}
            className="w-full"
            min="50"
            max="500"
            step="10"
          />
        </div>
        
        <div>
          <label htmlFor="roomsBookedPerDay" className="block mb-2 font-medium">Rooms Booked per Day: {roomsBookedPerDay}</label>
          <input
            type="range"
            id="roomsBookedPerDay"
            value={roomsBookedPerDay}
            onChange={(e) => setRoomsBookedPerDay(Number(e.target.value))}
            className="w-full"
            min="10"
            max="100"
            step="5"
          />
        </div>
        
        <div>
          <label htmlFor="daysOpenPerMonth" className="block mb-2 font-medium">Days Open per Month: {daysOpenPerMonth}</label>
          <input
            type="range"
            id="daysOpenPerMonth"
            value={daysOpenPerMonth}
            onChange={(e) => setDaysOpenPerMonth(Number(e.target.value))}
            className="w-full"
            min="20"
            max="31"
            step="1"
          />
        </div>
        
        <div>
          <label htmlFor="occupancyCostPercentage" className="block mb-2 font-medium">Occupancy Cost Percentage: {occupancyCostPercentage}%</label>
          <input
            type="range"
            id="occupancyCostPercentage"
            value={occupancyCostPercentage}
            onChange={(e) => setOccupancyCostPercentage(Number(e.target.value))}
            className="w-full"
            min="20"
            max="50"
            step="1"
          />
        </div>
        
        <div>
          <label htmlFor="rentPerMonth" className="block mb-2 font-medium">Monthly Rent ($)</label>
          <input
            type="number"
            id="rentPerMonth"
            value={rentPerMonth}
            onChange={(e) => setRentPerMonth(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="staffCostPerMonth" className="block mb-2 font-medium">Monthly Staff Cost ($)</label>
          <input
            type="number"
            id="staffCostPerMonth"
            value={staffCostPerMonth}
            onChange={(e) => setStaffCostPerMonth(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="utilitiesPerMonth" className="block mb-2 font-medium">Monthly Utilities ($)</label>
          <input
            type="number"
            id="utilitiesPerMonth"
            value={utilitiesPerMonth}
            onChange={(e) => setUtilitiesPerMonth(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="maintenanceCostPerMonth" className="block mb-2 font-medium">Monthly Maintenance Cost ($)</label>
          <input
            type="number"
            id="maintenanceCostPerMonth"
            value={maintenanceCostPerMonth}
            onChange={(e) => setMaintenanceCostPerMonth(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
        
        <div>
          <label htmlFor="marketingCostPerMonth" className="block mb-2 font-medium">Monthly Marketing Cost ($)</label>
          <input
            type="number"
            id="marketingCostPerMonth"
            value={marketingCostPerMonth}
            onChange={(e) => setMarketingCostPerMonth(Number(e.target.value))}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            min="0"
          />
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-100 rounded-md grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Monthly Revenue:</h2>
          <p className="text-2xl text-blue-600 font-bold">{formatCurrency(monthlyRevenue)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Monthly Occupancy Costs:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(monthlyCostOfGoods)}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Monthly Operating Expenses:</h2>
          <p className="text-2xl text-red-600 font-bold">{formatCurrency(monthlyOperatingExpenses)}</p>
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
