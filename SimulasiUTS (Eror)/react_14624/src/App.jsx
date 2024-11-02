import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import AddItem from "./Components/AddItem";
import InventoryList from "./Components/InventoryList";
import ItemDetail from "./Components/ItemDetail";
import Sidebar from "./Components/Sidebar";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Item A", category: "Category 1", stock: 20, price: 100 },
    { id: 2, name: "Item B", category: "Category 2", stock: 15, price: 200 },
  ]);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Header username="Nama Pengguna" />
          <Routes>
            <Route path="/" element={<InventoryList items={items} />} />
            <Route
              path="/inventory/:id"
              element={<ItemDetail items={items} />}
            />
            <Route path="/add-item" element={<AddItem onAdd={addItem} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
