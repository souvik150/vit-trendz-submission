import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Journal from "./routes/journals/journals.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="journal" element={<Journal />} />
      </Route>
    </Routes>
  );
}

export default App;
