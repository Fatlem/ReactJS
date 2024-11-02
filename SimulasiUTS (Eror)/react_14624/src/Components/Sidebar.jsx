import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen p-6 w-60">
      <h3 className="text-2xl font-bold mb-6">Menu</h3>
      <ul>
        <li className="mb-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/inventory" className="text-gray-300 hover:text-white">
            Inventory List
          </Link>
        </li>
        <li>
          <Link to="/add-item" className="text-gray-300 hover:text-white">
            Add Item
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
