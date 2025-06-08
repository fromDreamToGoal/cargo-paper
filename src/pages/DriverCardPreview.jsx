import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import DriverCardPDF from './DriverCardPDF';

export default function DriverCardPreview() {
  const location = useLocation();
  const navigate = useNavigate();
  const driver = location.state?.driver;

  if (!driver) {
    return (
      <div className="p-6">
        <p className="mb-4 text-lg">Нет данных для отображения.</p>
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => navigate('/drivers')}
        >
          &lt; Назад
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <PDFViewer width="100%" height="100%">
        <DriverCardPDF driver={driver} />
      </PDFViewer>
    </div>
  );
}