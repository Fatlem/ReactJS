import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import InventoryList from "../Pages/InventoryList";
import ItemDetail from "../Pages/ItemDetail";
import AddItem from "../Pages/AddItem";
import { useInventory } from "../Contexts/InventoryContext";

const AppRoutes = () => {
  const { inventory, searchTerm, setSearchTerm } = useInventory();

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route
        path="/inventory"
        element={
          <InventoryList
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        }
      />
      <Route path="/inventory/:id" element={<ItemDetail />} />
      <Route path="/add" element={<AddItem />} />
    </Routes>
  );
};

export default AppRoutes;
