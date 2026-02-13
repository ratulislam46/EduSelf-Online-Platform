"use client"
import React, { useState, useEffect } from 'react';
import DeptList from './components/DeptList';

const BooksSection = () => {
  const [libraryData, setLibraryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ভবিষ্যতে এখানে fetch('https://api.yoursite.com/data') হবে
    const fetchData = async () => {
      try {
        const response = await fetch('/data/libraryData.json'); // Public folder path
        const data = await response.json();
        setLibraryData(data);
      } catch (error) {
        console.error("Data fetching failed", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="text-center p-20 font-bold">Loading Library...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* প্রথম কম্পোনেন্টকে কল করা হচ্ছে */}
        <DeptList allData={libraryData} />
      </div>
    </div>
  );
};

export default BooksSection;