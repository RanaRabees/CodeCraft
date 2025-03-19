"use client";

import { AlertCircle } from "lucide-react";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm text-center">
        <AlertCircle className="text-red-500 w-12 h-12 mx-auto mb-4" />
        <h1 className="text-2xl font-semibold text-red-600">Oops! Something went wrong</h1>
        <p className="text-gray-600 mt-2">{error.message}</p>
        <button 
          onClick={reset} 
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
