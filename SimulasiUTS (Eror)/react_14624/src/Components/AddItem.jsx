import { useState } from "react";
import PropTypes from "prop-types";

const AddItem = ({ addItem }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!name || !category || stock === "" || price === "") {
      alert("Please fill all fields");
      return;
    }
    if (stock <= 0 || price <= 0) {
      alert("Stock and price must be positive numbers");
      return;
    }

    // Call addItem function with item details
    addItem({ name, category, stock: Number(stock), price: Number(price) });

    // Reset form fields
    setName("");
    setCategory("");
    setStock("");
    setPrice("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold">Add New Item</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded"
        autoFocus
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        className="w-full p-2 border rounded"
        min="1"
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full p-2 border rounded"
        min="1"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
};

AddItem.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default AddItem;
