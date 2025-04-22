import { Routes, Route } from 'react-router-dom';
import ShellCouple from '../../layouts/ShellCouple/index.jsx';
import Home from '../../pages/couple/Home/index.jsx';
import Search from '../../pages/couple/Search/index.jsx';
import ComponentPlayground from '../../pages/dev/ComponentPlayground.jsx';

export default function CoupleRoutes() {
  return (
    <ShellCouple>
      <Routes>
      <Route path="/dev" element={<ComponentPlayground />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </ShellCouple>
  );
}
