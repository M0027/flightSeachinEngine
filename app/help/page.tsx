'use client';

import React from 'react';

const HelpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-2xl w-full text-gray-900 dark:text-gray-100">
        <h1 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-6 text-center">Help Center</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-3">Welcome to Flight Search Engine Help!</h2>
          <p className="mb-4 leading-relaxed">
            Our Flight Search Engine helps you find the best flights for your travels. Easily search for one-way or round-trip flights by specifying your origin, destination, and desired dates.
          </p>
          <p className="leading-relaxed">
            We provide a user-friendly interface to quickly browse through flight options and apply various filters to narrow down your results based on price, number of stops, and airlines.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-3">How to Use</h2>
          <ul className="list-disc list-inside space-y-2 leading-relaxed">
            <li><strong>Search for Flights:</strong> Enter your departure and arrival cities, select your travel dates, and choose the number of adults traveling.</li>
            <li><strong>Filter Results:</strong> Use the provided filters to refine your search by price range, number of stops, and preferred airline.</li>
            <li><strong>View Flight Details:</strong> Click on any flight card to see more detailed information about the selected flight.</li>
            <li><strong>Understand the Chart:</strong> The bar chart provides a quick overview of average flight prices per airline, helping you make informed decisions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-3">Troubleshooting & Support</h2>
          <p className="mb-4 leading-relaxed">
            If you encounter any issues or have questions, please ensure your internet connection is stable and try refreshing the page. For persistent problems, double-check your search parameters.
          </p>
          <p className="leading-relaxed">
            This application is a demonstration project, and for advanced support or bug reporting, please refer to the project's source code repository or contact the developer directly.
          </p>
        </section>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-8 text-sm">
          Thank you for using our Flight Search Engine!
        </p>
      </div>
    </div>
  );
};

export default HelpPage;
