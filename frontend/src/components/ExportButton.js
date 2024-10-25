import React from 'react';

import axios from 'axios';

const ExportButton = ({ format }) => {
  const handleExport = async () => {
    try {
      const response = await axios.get(`/api/books/export?format=${format}`);
      const blob = new Blob([response.data], { type: 'text/csv' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = `books.${format}`;
      link.click();
    } catch (error) {
      console.error('Export error:', error);
    }
  };

  return (
    <button onClick={() => handleExport()}>
      Export as {format.toUpperCase()}
    </button>
  );
};

export default ExportButton;
