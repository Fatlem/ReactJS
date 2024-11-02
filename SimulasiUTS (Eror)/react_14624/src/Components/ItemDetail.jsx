import PropTypes from "prop-types";

const ItemDetail = ({ item }) => {
  return item ? (
    <div className="p-6 bg-white rounded shadow-md">
      <h2
        className="text-2xl font-bold mb-4"
        aria-label={`Details for ${item.name}`}
      >
        {item.name}
      </h2>
      <p>Category: {item.category}</p>
      <p>Stock: {item.stock}</p>
      <p>Price: ${item.price}</p>
    </div>
  ) : (
    <p className="p-6 text-gray-500">Item not found</p>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default ItemDetail;
