import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { Camera, Download, CheckCircle } from 'lucide-react';

const PaymentConfirm = () => {
  const location = useLocation();
  const [token, setToken] = useState('');
  const confirmationRef = useRef(null);
  const { transactionId, amount } = location.state || {};
  const studentData = location.state?.studentData || {};

  useEffect(() => {
    // Generate unique token combining timestamp and transaction ID
    const timestamp = new Date().getTime();
    const uniqueToken = `TYF${timestamp.toString(36)}${transactionId.slice(-4)}`.toUpperCase();
    setToken(uniqueToken);
  }, [transactionId]);

  const handleDownloadScreenshot = async () => {
    if (confirmationRef.current) {
      try {
        const canvas = await html2canvas(confirmationRef.current);
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.href = image;
        link.download = `payment-confirmation-${token}.png`;
        link.click();
      } catch (error) {
        console.error('Error generating screenshot:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div 
          ref={confirmationRef}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          {/* Success Header */}
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Payment Successful!
            </h1>
            <p className="text-gray-600">
              Thank you for registering for Truba Youth Fest 2K25
            </p>
          </div>

          {/* Token Display */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h2 className="text-sm text-gray-600 mb-1">Confirmation Token</h2>
            <p className="text-2xl font-mono font-bold text-indigo-600">{token}</p>
          </div>

          {/* Transaction Details */}
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Transaction Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Amount Paid</p>
                  <p className="font-semibold">₹{amount}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Transaction ID</p>
                  <p className="font-semibold">{transactionId}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Date & Time</p>
                  <p className="font-semibold">
                    {new Date().toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <p className="text-green-600 font-semibold">Confirmed</p>
                </div>
              </div>
            </div>

            {/* Student Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Student Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Name</p>
                  <p className="font-semibold">{studentData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold">{studentData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-semibold">{studentData.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">College</p>
                  <p className="font-semibold">{studentData.college}</p>
                </div>
              </div>
            </div>

            {/* Registered Events */}
            {studentData.events && studentData.events.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Registered Events</h3>
                <div className="grid grid-cols-2 gap-2">
                  {studentData.events.map((event, index) => (
                    <div key={index} className="bg-gray-50 p-2 rounded">
                      {event}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Screenshot Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleDownloadScreenshot}
            className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Camera className="w-5 h-5" />
            <span>Download Receipt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirm;