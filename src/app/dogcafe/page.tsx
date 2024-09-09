"use client";

import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DogCafeBusinessCalculator() {
  const [averageTicketPrice, setAverageTicketPrice] = useState<number>(15);
  const [customersPerDay, setCustomersPerDay] = useState<number>(50);
  const [daysOpenPerMonth, setDaysOpenPerMonth] = useState<number>(26);
  const [foodCostPercentage, setFoodCostPercentage] = useState<number>(30);
  const [rentPerMonth, setRentPerMonth] = useState<number>(3000);
  const [staffCostPerMonth, setStaffCostPerMonth] = useState<number>(8000);
  const [utilitiesPerMonth, setUtilitiesPerMonth] = useState<number>(800);
  const [dogSuppliesCostPerMonth, setDogSuppliesCostPerMonth] = useState<number>(500);
  const [marketingCostPerMonth, setMarketingCostPerMonth] = useState<number>(600);

  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(0);
  const [monthlyCostOfGoods, setMonthlyCostOfGoods] = useState<number>(0);
  const [monthlyOperatingExpenses, setMonthlyOperatingExpenses] = useState<number>(0);
  const [monthlyNetProfit, setMonthlyNetProfit] = useState<number>(0);
  const [isLoss, setIsLoss] = useState<boolean>(false);

  const calculateFinancials = () => {
    const revenue = averageTicketPrice * customersPerDay * daysOpenPerMonth;
    const costOfGoods = revenue * (foodCostPercentage / 100);
    const operatingExpenses =
      rentPerMonth +
      staffCostPerMonth +
      utilitiesPerMonth +
      dogSuppliesCostPerMonth +
      marketingCostPerMonth;
    const netProfit = revenue - costOfGoods - operatingExpenses;

    setMonthlyRevenue(revenue);
    setMonthlyCostOfGoods(costOfGoods);
    setMonthlyOperatingExpenses(operatingExpenses);
    setMonthlyNetProfit(netProfit);
    setIsLoss(netProfit < 0);
  };

  useEffect(() => {
    calculateFinancials();
  }, [
    averageTicketPrice,
    customersPerDay,
    daysOpenPerMonth,
    foodCostPercentage,
    rentPerMonth,
    staffCostPerMonth,
    utilitiesPerMonth,
    dogSuppliesCostPerMonth,
    marketingCostPerMonth,
  ]);

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const data = {
    labels: ["Monthly Revenue", "Cost of Goods", "Operating Expenses", "Net Profit"],
    datasets: [
      {
        label: "Dog Cafe Business Financials",
        data: [monthlyRevenue, monthlyCostOfGoods, monthlyOperatingExpenses, monthlyNetProfit],
        backgroundColor: ["#001f3f", "#FF6384", "#FFCE56", "#36A2EB"], // Dark Navy Blue for Monthly Revenue
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
          },
        },
        grid: {
          offset: true,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return context.dataset.label + ": $" + context.parsed.y.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          },
        },
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center">Dog Cafe Business Calculator</h1>

        <div className="space-y-6">
          <div>
            <label htmlFor="averageTicketPrice" className="block mb-2 font-medium">
              Average Ticket Price ($)
            </label>
            <input
              type="number"
              id="averageTicketPrice"
              value={averageTicketPrice}
              onChange={(e) => setAverageTicketPrice(Number(e.target.value))}
              className="w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="5"
              max="50"
              step="0.5"
              style={{ appearance: "none", MozAppearance: "textfield" }} // This line will remove the arrows
            />
          </div>

          <div>
            <label htmlFor="customersPerDay" className="block mb-2 font-medium">
              Customers per Day: {customersPerDay}
            </label>
            <input
              type="range"
              id="customersPerDay"
              value={customersPerDay}
              onChange={(e) => setCustomersPerDay(Number(e.target.value))}
              className="w-3/4"
              min="10"
              max="200"
              step="5"
            />
          </div>

          <div>
            <label htmlFor="daysOpenPerMonth" className="block mb-2 font-medium">
              Days Open per Month: {daysOpenPerMonth}
            </label>
            <input
              type="range"
              id="daysOpenPerMonth"
              value={daysOpenPerMonth}
              onChange={(e) => setDaysOpenPerMonth(Number(e.target.value))}
              className="w-3/4"
              min="20"
              max="31"
              step="1"
            />
          </div>

          <div>
            <label htmlFor="foodCostPercentage" className="block mb-2 font-medium">
              Food Cost Percentage: {foodCostPercentage}%
            </label>
            <input
              type="range"
              id="foodCostPercentage"
              value={foodCostPercentage}
              onChange={(e) => setFoodCostPercentage(Number(e.target.value))}
              className="w-3/4"
              min="20"
              max="50"
              step="1"
            />
          </div>

          <div>
            <label htmlFor="rentPerMonth" className="block mb-2 font-medium">
              Monthly Rent ($)
            </label>
            <input
              type="number"
              id="rentPerMonth"
              value={rentPerMonth}
              onChange={(e) => setRentPerMonth(Number(e.target.value))}
              className="w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>

          <div>
            <label htmlFor="staffCostPerMonth" className="block mb-2 font-medium">
              Monthly Staff Cost ($)
            </label>
            <input
              type="number"
              id="staffCostPerMonth"
              value={staffCostPerMonth}
              onChange={(e) => setStaffCostPerMonth(Number(e.target.value))}
              className="w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>

          <div>
            <label htmlFor="utilitiesPerMonth" className="block mb-2 font-medium">
              Monthly Utilities ($)
            </label>
            <input
              type="number"
              id="utilitiesPerMonth"
              value={utilitiesPerMonth}
              onChange={(e) => setUtilitiesPerMonth(Number(e.target.value))}
              className="w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>

          <div>
            <label htmlFor="dogSuppliesCostPerMonth" className="block mb-2 font-medium">
              Monthly Dog Supplies Cost ($)
            </label>
            <input
              type="number"
              id="dogSuppliesCostPerMonth"
              value={dogSuppliesCostPerMonth}
              onChange={(e) => setDogSuppliesCostPerMonth(Number(e.target.value))}
              className="w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>

          <div>
            <label htmlFor="marketingCostPerMonth" className="block mb-2 font-medium">
              Monthly Marketing Cost ($)
            </label>
            <input
              type="number"
              id="marketingCostPerMonth"
              value={marketingCostPerMonth}
              onChange={(e) => setMarketingCostPerMonth(Number(e.target.value))}
              className="w-3/4 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              min="0"
            />
          </div>
        </div>
      </div>

      <div>
        <Bar data={data} options={options} />

        {isLoss && (
          <div className="fixed bottom-0 left-0 w-full text-center bg-white z-50 p-4">
            <p className="text-red-600 font-bold text-xl blink">
              You are generating loss
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        .blink {
          animation: blinker 1s linear infinite;
        }

        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }

        .fixed {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          z-index: 50;
        }
      `}</style>
    </div>
  );
}
