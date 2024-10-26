import React from 'react';

import axios from 'axios';

const ExportButton = ({ format }) => {
  const handleExport = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/books/export?format=${format}`, {
      responseType: 'blob',
    });

    const fileType = format === 'csv' ? 'text/csv' : 'application/json';
    const blob = new Blob([response.data], { type: fileType });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = `books.${format}`;
    link.click();
    } catch (error) {
      console.error('Export error:', error);
    }
  };

  return (
    <button className="export-button" onClick={handleExport}>
      Export as {format.toUpperCase()}
    </button>
  );
};

export default ExportButton;
