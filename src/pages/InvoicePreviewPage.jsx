import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import InvoiceTemplatePDF from './InvoiceTemplatePDF';

const InvoicePreviewPage = () => {
  return (
    <div style={{ height: '100vh' }}>
      <PDFViewer width="100%" height="100%">
        <InvoiceTemplatePDF />
      </PDFViewer>
    </div>
  );
};

export default InvoicePreviewPage;