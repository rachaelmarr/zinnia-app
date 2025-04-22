// src/layouts/Header/index.jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold text-[#47567B]">Zinnia</div>
      <nav className="flex gap-6 text-[#667593] font-medium">
        <Link to="/">Dashboard</Link>
        <Link to="/inbox">Inbox</Link>
      </nav>
    </header>
  );
}