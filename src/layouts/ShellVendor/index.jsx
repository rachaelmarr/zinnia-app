import VendorSidebar from '../../components/layouts/VendorSidebar';

export default function ShellVendor() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex">
      <VendorSidebar />
      <div className="flex-1">
        <VendorHeader isLoggedIn={true} />
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
