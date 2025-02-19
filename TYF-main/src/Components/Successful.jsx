import React from 'react';
import { CheckCircle, TriangleAlert } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function Successful() {
  const navigate = useNavigate();
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || "N/A";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto animate-bounce" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Registration Successful!
        </h1>
        <div className="space-y-4 mb-8">
          <p className="text-gray-600">
            Thank you for registering for Truba Youth Fest 2K25! Your registration has been confirmed.
          </p>
         
          <div className="bg-green-50 rounded-lg p-4">
            <p className="text-green-800">
              A confirmation email has been sent to your registered email address with all the event details.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/payment', { state: { totalAmount } })}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl
                     shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full"
          >
            Continue For Payment
          </button>
          <div className="flex items-center gap-2">
            <TriangleAlert className="w-6 h-6 text-red-500" />
            <div>
              <p className="text-sm text-red-500">
                Note: If you have not paid for the registration you will be marked as unregistered for the event
              </p>
              <p className="text-lg font-bold text-purple-600 mt-2">
                Total Amount to Pay: ₹{totalAmount}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Successful;