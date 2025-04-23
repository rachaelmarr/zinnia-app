import { Routes, Route } from 'react-router-dom';
import ShellVendor from '../../layouts/ShellVendor/index.jsx';
import Dashboard from '../../pages/vendor/Dashboard/index.jsx';
import Inbox from '../../pages/vendor/Inbox/index.jsx';

export default function VendorRoutes() {
  return (
    <Routes>
      {/* Wrap vendor pages in the layout shell */}
      <Route element={<ShellVendor />}>
        <Route index element={<Dashboard />} /> {/* matches /vendor */}
        <Route path="inbox" element={<Inbox />} /> {/* matches /vendor/inbox */}
        <Route path="dashboard" element={<Dashboard />} /> {/* matches /vendor/dashboard */}
      </Route>
    </Routes>
  );
}
