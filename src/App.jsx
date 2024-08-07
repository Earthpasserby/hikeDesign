// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componenets/Header";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Header />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
