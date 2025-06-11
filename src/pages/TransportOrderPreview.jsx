import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import TransportOrderPDF from '../templates/TransportOrderPDF';

const TransportOrderPreview = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state?.data;

  if (!data) {
    return (
      <div className="p-6">
        <p className="mb-4 text-lg">Нет данных для отображения.</p>
        <button
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          onClick={() => navigate('/main')}
        >
          &lt; На главную
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <PDFViewer width="100%" height="100%">
        <TransportOrderPDF data={data} />
      </PDFViewer>
    </div>
  );
};

export default TransportOrderPreview;