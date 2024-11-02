import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useInventory } from "../Contexts/InventoryContext";

const AddItem = () => {
  const navigate = useNavigate();
  const { addItem } = useInventory();

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    stock: "",
    price: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Nama barang harus diisi";
    if (!formData.category) newErrors.category = "Kategori harus diisi";
    if (!formData.stock || formData.stock <= 0)
      newErrors.stock = "Stok harus lebih dari 0";
    if (!formData.price || formData.price <= 0)
      newErrors.price = "Harga harus lebih dari 0";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      addItem({
        ...formData,
        stock: parseInt(formData.stock),
        price: parseInt(formData.price),
      });
      navigate("/inventory");
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Tambah Barang Baru</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Nama Barang</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Kategori</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">{errors.category}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Stok</label>
          <input
            type="number"
            value={formData.stock}
            onChange={(e) =>
              setFormData({ ...formData, stock: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          {errors.stock && (
            <p className="text-red-500 text-sm mt-1">{errors.stock}</p>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Harga</label>
          <input
            type="number"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Tambah Barang
        </button>
      </form>
    </div>
  );
};

export default AddItem;
