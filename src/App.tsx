import React, { useState } from "react";
import Left from "./Components/Left/Left";
import Right from "./Components/Right/Right";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-row h-screen border-red">
      <Left open={open} handleOpen={handleOpen} />
      <Right handleOpen={handleOpen} />
    </div>
  );
}

export default App;
