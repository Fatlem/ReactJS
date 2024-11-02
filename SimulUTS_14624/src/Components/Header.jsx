import { User } from "lucide-react";

const Header = ({ username }) => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center fixed top-0 right-0 left-64 z-10">
    <h1 className="text-xl font-bold">Manajemen Inventaris Barang</h1>
    <div className="flex items-center gap-2">
      <User size={20} />
      <span>{username}</span>
    </div>
  </header>
);

export default Header;
