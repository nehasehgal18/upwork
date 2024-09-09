'use client'

import React, { useState } from 'react';
import Image from 'next/image';

export default function CheckoutPage() {
  const [extendedWarranty, setExtendedWarranty] = useState('');
  const [isGift, setIsGift] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit');

  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row gap-8">
      <div className="md:w-2/3">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        
        {/* Email Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">EMAIL</h2>
          <input type="email" placeholder="Email Address*" className="w-full p-2 border rounded" />
        </section>

        {/* Warranty Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">PROTECT YOUR BUSINESS PLAN</h2>
          <p className="mb-4">12-Month Limited Warranty included. Extend your warranty for longer protection. <a href="#" className="text-blue-500">Learn More</a></p>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="radio" name="warranty" value="12" onChange={(e) => setExtendedWarranty(e.target.value)} className="mr-2" />
              Add 12 additional months for $175, 24 total months of coverage
            </label>
            <label className="flex items-center">
              <input type="radio" name="warranty" value="27" onChange={(e) => setExtendedWarranty(e.target.value)} className="mr-2" />
              Add 27 additional months for $230, 39 total months of coverage
            </label>
          </div>
        </section>

        {/* Shipping Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">SHIPPING</h2>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="p-2 border rounded" />
            <input type="text" placeholder="Last Name" className="p-2 border rounded" />
          </div>
          <input type="tel" placeholder="Phone" className="w-full p-2 border rounded mt-4" />
          <input type="text" placeholder="Address" className="w-full p-2 border rounded mt-4" />
          <input type="text" placeholder="Apt, Suite" className="w-full p-2 border rounded mt-4" />
          <div className="grid grid-cols-3 gap-4 mt-4">
            <input type="text" placeholder="City*" className="p-2 border rounded" />
            <select className="p-2 border rounded">
              <option>State*</option>
              {/* Add state options here */}
            </select>
            <input type="text" placeholder="ZIP Code*" className="p-2 border rounded" />
          </div>
          <select className="w-full p-2 border rounded mt-4">
            <option>United States</option>
            {/* Add country options here */}
          </select>
          <div className="mt-4">
            <label className="flex items-center">
              <input type="checkbox" checked={isGift} onChange={(e) => setIsGift(e.target.checked)} className="mr-2" />
              This order is a gift
            </label>
          </div>
        </section>

        {/* Payment Method Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">PAYMENT METHOD</h2>
          <div className="space-y-4">
            <button 
              onClick={() => setPaymentMethod('credit')} 
              className={`w-full p-3 border rounded flex justify-between items-center ${paymentMethod === 'credit' ? 'border-blue-500' : ''}`}
            >
              <span>Credit Card</span>
              <div className="flex gap-2">
                <Image src="/visa.png" alt="Visa" width={30} height={20} />
                <Image src="/mastercard.png" alt="Mastercard" width={30} height={20} />
                <Image src="/amex.png" alt="Amex" width={30} height={20} />
              </div>
            </button>
            <button 
              onClick={() => setPaymentMethod('affirm')} 
              className={`w-full p-3 border rounded flex justify-between items-center ${paymentMethod === 'affirm' ? 'border-blue-500' : ''}`}
            >
              <span>Pay Over Time</span>
              <Image src="/affirm.png" alt="Affirm" width={60} height={20} />
            </button>
          </div>
        </section>
      </div>

      {/* Order Summary */}
      <div className="md:w-1/3">
        <div className="bg-gray-100 p-6 rounded">
          <h2 className="text-xl font-semibold mb-4">CART SUMMARY</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>1 Business Plan Basics Package</span>
              <span>$2,495.00</span>
            </div>
            <div className="text-sm text-gray-600">
              <p>Business Plan+</p>
              <p>12-Month Business Plan Limited Warranty</p>
            </div>
            <div className="flex justify-between">
              <span>Subtotal (2):</span>
              <span>$2,495.00</span>
            </div>
            <div className="flex justify-between">
              <span>Est. delivery and setup</span>
              <span>Included</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Estimated Total:</span>
              <span>$2,495.00</span>
            </div>
            <p className="text-sm">As low as $59/month¹ for 43 months at 0% APR.</p>
          </div>
          <button className="w-full mt-6 bg-blue-500 text-white p-3 rounded font-semibold">
            Place Order
          </button>
          <div className="mt-6 p-4 bg-white rounded">
            <h3 className="font-semibold mb-2">100 DAY HOME TRIAL</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Try the Business Plan at home for 100 days.</li>
              <li>Explore thousands of resources, live and on-demand.</li>
              <li>Not for you? We'll refund your entire order.</li>
            </ol>
            <p className="text-sm mt-2">Limited-time offer. <a href="#" className="text-blue-500">Terms apply</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}