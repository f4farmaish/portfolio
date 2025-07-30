import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
      <img
        src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="404 Not Found"
        className="w-[400px] mb-6"
      />

      <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>

      <button
        onClick={handleGoHome}
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition"
      >
        Go Home
      </button>
    </div>
  );
}
