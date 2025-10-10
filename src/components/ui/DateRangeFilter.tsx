'use client';

import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

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
    // Set default to today
    setFromDate(maxDate);
    setToDate(maxDate);
    onDateChange(maxDate, maxDate);
  }, [maxDate, onDateChange]);

  const handleFromDateChange = (date: string) => {
    setFromDate(date);
    onDateChange(date, toDate);
  };

  const handleToDateChange = (date: string) => {
    setToDate(date);
    onDateChange(fromDate, date);
  };

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return '';
    const [year, month, day] = dateStr.split('-');
    return `${day}-${month}-${year}`;
  };

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div className="flex items-center space-x-2">
        <Calendar className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">From:</span>
        <input
          type="date"
          value={fromDate}
          min={minDate}
          max={maxDate}
          onChange={(e) => handleFromDateChange(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <span className="text-xs text-gray-500">{formatDisplayDate(fromDate)}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        <span className="text-sm font-medium text-gray-700">To:</span>
        <input
          type="date"
          value={toDate}
          min={minDate}
          max={maxDate}
          onChange={(e) => handleToDateChange(e.target.value)}
          className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <span className="text-xs text-gray-500">{formatDisplayDate(toDate)}</span>
      </div>
    </div>
  );
}