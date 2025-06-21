import { useLocation } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import TransportRequestPDF from '../templates/TransportRequestPDF';

const InvoicePreviewPage = () => {
  const location = useLocation();
  const data = location.state?.data;

  if (!data) return <div>Нет данных для отображения.</div>;

  return (
    <PDFViewer width="100%" height="1000">
      <TransportRequestPDF data={data} />
    </PDFViewer>
  );
};

export default InvoicePreviewPage;