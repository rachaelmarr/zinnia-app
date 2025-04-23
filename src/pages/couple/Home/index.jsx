import { useLoadGoogleMaps } from '../../../hooks/useLoadGoogleMaps';

export default function CoupleHomePage() {
  useLoadGoogleMaps(); // ✅ Load script once on mount

  return (
    <>
      <h1 className="text-xl font-[Literata] text-slate-700 mb-4">
        Welcome to your Zinnia home
      </h1>
      <div className="text-slate-500 font-[Montserrat]">
        Explore vendors, track your favorites, and plan with confidence.
      </div>
    </>
  );
}
