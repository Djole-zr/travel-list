import { useState } from "react";
import Logo from "./Logo"
import Form from "./Form"
import PackingList from "./PackingList";
import Stats from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((ter) => [...ter, item]);
  }

  function handleDeleteItem(id) {
    setItems((bes) => bes.filter((jedan) => jedan.id !== id));
  }

  function handleToggleItem(id) {
    setItems((nes) =>
      nes.map((x) => (x.id === id ? { ...x, packed: !x.packed } : x))
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        setItems={setItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
