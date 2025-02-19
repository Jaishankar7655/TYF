import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Camera, Copy, Check, Loader } from "lucide-react";

import image from "../assets/image.png";

const PaymentGateway = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const totalAmount = location.state?.totalAmount || "N/A";
  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const upiId = "9131705898@ybl";
  const upiLink = `upi://pay?pa=${upiId}&am=${totalAmount}&cu=INR`;
  const phonepeLink = `phonepe://pay?pa=${upiId}&am=${totalAmount}&cu=INR`;
  const googlePayLink = `gpay://upi/pay?pa=${upiId}&am=${totalAmount}&cu=INR`;
  const paytmLink = `paytmmp://pay?pa=${upiId}&am=${totalAmount}&cu=INR`;

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScreenshotChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB");
        return;
      }
      setScreenshot(file);
      setError("");
    }
  };

  const handleSubmit = async () => {
    if (!screenshot) {
      setError("Please upload payment screenshot");
      return;
    }

    setIsLoading(true);
    try {
      // Simulating API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      navigate("/payment-confirm", {
        state: {
          transactionId,
          amount: totalAmount,
          studentData: location.state?.studentData,
        },
      });
    } catch (err) {
      setError("Payment verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Complete Your Payment
          </h2>
          <p className="text-center text-gray-500 mt-1">
            Pay using any UPI app
          </p>
        </div>

        {/* Main Content */}
        <div className="p-6 space-y-6">
          {/* Amount Display */}
          <div className="text-center">
            <p className="text-sm text-gray-500">Amount to Pay</p>
            <p className="text-3xl font-bold text-blue-600">₹{totalAmount}</p>
          </div>

          {/* QR Code */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
              <img
                src={image}
                alt="Payment QR Code"
                className="w-40 h-40 object-contain"
              />
            </div>
          </div>

          {/* UPI ID */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">UPI ID</p>
                <p className="text-base font-medium text-gray-700">{upiId}</p>
              </div>
              <button
                onClick={copyUpiId}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Payment Apps */}
          <div className="grid grid-cols-3 gap-4">
            <a
              href={phonepeLink}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-xs font-medium">PhonePe</span>
              </div>
              <span className="text-sm text-gray-600">PhonePe</span>
            </a>

            <a
              href={googlePayLink}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-xs font-medium">GPay</span>
              </div>
              <span className="text-sm text-gray-600">Google Pay</span>
            </a>

            <a
              href={paytmLink}
              className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                <span className="text-white text-xs font-medium">Paytm</span>
              </div>
              <span className="text-sm text-gray-600">Paytm</span>
            </a>
          </div>

          {/* Other UPI Apps */}
          <a
            href={upiLink}
            className="block w-full py-3 px-4 bg-gray-50 rounded-lg text-center text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Open in Other UPI Apps
          </a>

          {/* Screenshot Upload */}
          <form action="">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-700">
                Upload Payment Screenshot
              </p>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  id="screenshot"
                />
                <label
                  htmlFor="screenshot"
                  className="block w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-center cursor-pointer hover:border-blue-500 transition-colors"
                >
                  <Camera className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    {screenshot
                      ? screenshot.name
                      : "Click to upload screenshot"}
                  </span>
                </label>
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>

            {/* Submit Button */}
            <Link to="/PaymentSuccess">
              <button  type="submit
              " className="w-full py-2 mt-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <Loader className="w-5 h-5 animate-spin mr-2" />
                    Verifying Payment...
                  </span>
                ) : (
                  "Confirm Payment"
                )}
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
