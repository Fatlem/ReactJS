// src/contexts/InventoryContext.jsx
import { createContext, useContext, useState } from "react";

const InventoryContext = createContext();

const initialInventory = [
  {
    id: 1,
    name: "Monitor",
    category: "Electronics",
    stock: 144,
    price: 3000000,
  },
  {
    id: 2,
    name: "Keyboard",
    category: "Gaming Gear",
    stock: 80,
    price: 1400000,
  },
  {
    id: 3,
    name: "Kursi Gaming",
    category: "Furniture",
    stock: 78,
    price: 3500000,
  },
];

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState(initialInventory);
  const [searchTerm, setSearchTerm] = useState("");

  const addItem = (newItem) => {
    setInventory([...inventory, { ...newItem, id: Date.now() }]);
  };

  return (
    <InventoryContext.Provider
      value={{
        inventory,
        searchTerm,
        setSearchTerm,
        addItem,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error("useInventory must be used within an InventoryProvider");
  }
  return context;
};
