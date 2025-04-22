// src/layouts/ShellVendor/index.jsx
import { Link } from 'react-router-dom';

export default function ShellVendor({ children }) {
  return (
    <div className="min-h-screen bg-background-light font-sans">
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-primary">Zinnia</div>
        <nav className="flex gap-6 text-secondary font-medium">
          <Link to="/vendor">Dashboard</Link>
          <Link to="/vendor/inbox">Inbox</Link>
        </nav>
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
}