
import { useState } from "react";
import Navbar from "./Navbar";
import { ItemListContainer} from "./ItemListContainer";
import { ItemDetailContainer} from "./ItemDetailContainer"
import { NotFound } from './NotFound';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container my-4">
        <Routes>
          {/* Catálogo general */}
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda" />} />
          {/* Catálogo filtrado por categoría todavia no la voy a usar jeje*/}
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Catálogo por categoría" />} />
          {/* Detalle de producto */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          {/* Redirección opcional (ejemplo) */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
