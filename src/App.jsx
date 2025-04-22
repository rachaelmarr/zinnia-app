// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendorRoutes from './routes/Vendor/index.jsx';
import CoupleRoutes from './routes/Couple/index.jsx';
import './styles/global.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/vendor/*" element={<VendorRoutes />} />
        <Route path="/*" element={<CoupleRoutes />} />
      </Routes>
    </Router>
  );
}
