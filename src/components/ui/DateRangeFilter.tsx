'use client';

import { useState, useEffect } from 'react';

interface DateRangeFilterProps {
  onDateChange: (fromDate: string, toDate: string) => void;
  className?: string;
}

export default function DateRangeFilter({ onDateChange, className = '' }: DateRangeFilterProps) {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  // Calculate date limits (today to 90 days ago)
  const today = new Date();
  const maxDate = today.toISOString().split('T')[0];
  const minDate = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  useEffect(() => {
    // Set default to today and call onDateChange immediately
    setFromDate(maxDate);
    setToDate(maxDate);
    onDateChange(maxDate, maxDate);
  }, [maxDate]);

  const handleFromDateChange = (date: string) => {
    setFromDate(date);
    onDateChange(date, toDate);
  };

  const handleToDateChange = (date: string) => {
    setToDate(date);
    onDateChange(fromDate, date);
  };

  return (
    <div className={`flex flex-col sm:flex-row sm:items-end space-y-4 sm:space-y-0 sm:space-x-4 ${className}`}>
      <div className="flex-shrink-0">
        <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
        <input
          type="date"
          value={fromDate}
          min={minDate}
          max={maxDate}
          onChange={(e) => handleFromDateChange(e.target.value)}
          className="px-3 py-2 w-full sm:w-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
        />
      </div>
      
      <div className="flex-shrink-0">
        <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
        <input
          type="date"
          value={toDate}
          min={minDate}
          max={maxDate}
          onChange={(e) => handleToDateChange(e.target.value)}
          className="px-3 py-2 w-full sm:w-auto border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
        />
      </div>
    </div>
  );
}