import { useLocation } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import Act1PDF from "../templates/Act1PDF.jsx";

const Act1Preview = () => {
  const location = useLocation();
  const data = location.state?.data;

  if (!data) return <div>Нет данных для отображения.</div>;

  return (
    <PDFViewer width="100%" height="1000">
      <Act1PDF data={data} />
    </PDFViewer>
  );
};

export default Act1Preview;