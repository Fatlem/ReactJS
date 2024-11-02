import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const InventoryList = ({ items }) => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
      {items.length > 0 ? (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id} className="border p-4 rounded shadow-md bg-white">
              <Link
                to={`/item/${item.id}`}
                className="text-blue-500 hover:underline"
                aria-label={`View details of ${item.name}`}
              >
                {item.name}
              </Link>
              <div>Category: {item.category}</div>
              <div>Stock: {item.stock}</div>
              <div>Price: ${item.price}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No items available in the inventory.</p>
      )}
    </div>
  );
};

InventoryList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default InventoryList;
