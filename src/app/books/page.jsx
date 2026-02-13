"use client"
import React, { useState, useEffect } from 'react';
import DeptList from './components/DeptList';

const BooksSection = () => {
  const [libraryData, setLibraryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Data will be fetch here 
    const fetchData = async () => {
      try {
        const response = await fetch('/data/libraryData.json');
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
        <DeptList allData={libraryData} />
      </div>
    </div>
  );
};

export default BooksSection;