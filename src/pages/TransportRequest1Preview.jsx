import { useLocation } from 'react-router-dom';
import { PDFViewer } from '@react-pdf/renderer';
import TransportRequest1PDF from '../templates/TransportRequest1PDF';

const TransportRequest1Preview = () => {
  const location = useLocation();
  const data = location.state?.data;

  if (!data) return <div>Нет данных для отображения.</div>;

  return (
    <PDFViewer width="100%" height="1000">
      <TransportRequest1PDF data={data} />
    </PDFViewer>
  );
};

export default TransportRequest1Preview;