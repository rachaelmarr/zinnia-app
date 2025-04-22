import { CoupleHeader } from '../../shared/components';

export default function ShellCouple({ children }) {
  const isLoggedIn = true; // 🔒 eventually this should be pulled from auth context

  return (
    <div className="min-h-screen bg-neutral-50">
      <CoupleHeader isLoggedIn={isLoggedIn} />
      <main className="p-8">{children}</main>
    </div>
  );
}