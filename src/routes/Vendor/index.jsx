import { Routes, Route } from 'react-router-dom';
import ShellVendor from '../../layouts/ShellVendor/index.jsx';
import Dashboard from '../../pages/vendor/Dashboard/index.jsx';
import Inbox from '../../pages/vendor/Inbox/index.jsx';

export default function VendorRoutes() {
  return (
    <ShellVendor>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inbox" element={<Inbox />} />
      </Routes>
    </ShellVendor>
  );
}
