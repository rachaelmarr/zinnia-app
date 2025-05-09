// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendorRoutes from './routes/Vendor/index.jsx';
import CoupleRoutes from './routes/Couple/index.jsx';
import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';
import SignUpChoice from './pages/signup/SignUpChoice';


<BrowserRouter>
  <App />
</BrowserRouter>


export default function App() {
  return (
    <Router>
      <Routes>
      <Route path="/signup" element={<SignUpChoice />} />
        <Route path="/vendor/*" element={<VendorRoutes />} />
        <Route path="/*" element={<CoupleRoutes />} />
      </Routes>
    </Router>
  );
}
