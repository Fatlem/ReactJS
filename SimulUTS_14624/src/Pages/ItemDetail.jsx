import { useNavigate, useParams } from "react-router-dom";
import { useInventory } from "../Contexts/InventoryContext";

const ItemDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { inventory } = useInventory();
  const item = inventory.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div className="p-6">Barang tidak ditemukan</div>;
  }

  return (
    <div className="p-6">
      <button
        onClick={() => navigate("/inventory")}
        className="mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Kembali ke Daftar
      </button>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">{item.name}</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 mb-2">Kategori:</p>
            <p className="font-semibold">{item.category}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-2">Stok:</p>
            <p className="font-semibold">{item.stock}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-2">Harga:</p>
            <p className="font-semibold text-blue-600">
              Rp {item.price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
