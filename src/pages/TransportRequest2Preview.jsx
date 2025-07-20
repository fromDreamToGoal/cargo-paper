import { useLocation } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import TransportRequest2PDF from "../templates/TransportRequest2PDF";

const TransportRequest2Preview = () => {
  const location = useLocation();
  const data = location.state?.data;

  if (!data) return <div>Нет данных для отображения.</div>;

  return (
    <PDFViewer width="100%" height="1000">
      <TransportRequest2PDF data={data} />
    </PDFViewer>
  );
};

export default TransportRequest2Preview;