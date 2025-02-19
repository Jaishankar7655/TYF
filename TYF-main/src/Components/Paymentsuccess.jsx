import React from 'react';
import { CheckCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-sm w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center">
          <CheckCircle className="w-16 h-16 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mt-4">
          Payment Successful
        </h1>

      <Link  to="https://www.trubainstitute.ac.in" >
      <button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2">
          <Home className="w-4 h-4" />
          Go to Home
        </button>
      </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;