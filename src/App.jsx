import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Main from './pages/Main'
import AddDriver from './pages/AddDriver'
import Drivers from './pages/Drivers'
import ViewDriver from './pages/ViewDriver'
import EditDriver from './pages/EditDriver'
import Companies from './pages/Companies'
import AddCompany from './pages/AddCompany'
import ViewCompany from './pages/ViewCompany'
import EditCompany from './pages/EditCompany'
import Templates from './pages/Templates'
import CreateDocument from './pages/CreateDocument'
import CreateTransportOrder from './pages/CreateTransportOrder'
import InvoicePreviewPage from './pages/InvoicePreviewPage'
import CreateInvoiceForPayment from './pages/CreateInvoiceForPayment'
import DriverCardPreview from './pages/DriverCardPreview'
import TransportOrderPreview from './pages/TransportOrderPreview'
import CreateAcceptanceAct from './pages/CreateAcceptanceAct'
import AcceptanceActPreview from './pages/AcceptanceActPreview'
import TransportRequestPreview from './pages/TransportRequestPreview'
import CreateTransportRequest from './pages/CreateTransportRequest'
import TransportRequest1Preview from './pages/TransportRequest1Preview'
import CreateTransportRequest1 from './pages/CreateTransportRequest1'
import TransportRequest2Preview from './pages/TransportRequest2Preview'
import TransportRequest2PDF from './templates/TransportRequest2PDF.jsx'
import CreateTransportRequest2 from './pages/CreateTransportRequest2.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/add-driver" element={<AddDriver />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/view-driver/:id" element={<ViewDriver />} />
        <Route path="/edit-driver/:id" element={<EditDriver />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/add-company" element={<AddCompany />} />
        <Route path="/view-company/:id" element={<ViewCompany />} />
        <Route path="/edit-company/:id" element={<EditCompany />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/create-document" element={<CreateDocument />} />
        <Route path="/create-transport-order" element={<CreateTransportOrder />} />
        <Route path="/invoice-preview" element={<InvoicePreviewPage />} />
        <Route path="/create-invoice" element={<CreateInvoiceForPayment />} />
        <Route path="/driver-card-preview" element={<DriverCardPreview />} />
        <Route path="/transport-order-preview" element={<TransportOrderPreview />} />
        <Route path="/create-acceptance-act" element={<CreateAcceptanceAct />} />
        <Route path="/acceptance-act-preview" element={<AcceptanceActPreview />} />
        <Route path="/transport-request-preview" element={<TransportRequestPreview />} />
        <Route path="/create-transport-request" element={<CreateTransportRequest />} />
        <Route path="/transport-request-1-preview" element={<TransportRequest1Preview />} />
        <Route path="/create-transport-request-1" element={<CreateTransportRequest1 />} />
        <Route path="/transport-request-2-preview" element={<TransportRequest2Preview />} />
        <Route path="/create-transport-request-2" element={<CreateTransportRequest2 />} />
      </Routes>
    </Router>
  );
};

export default App;