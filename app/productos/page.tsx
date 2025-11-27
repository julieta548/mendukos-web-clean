"use client";

import React from "react";
import productos from "@/data/productos";
import ProductosLista from "@/components/ProductosLista";

export default function ProductosPage() {


  return (
    <>
      <ProductosLista productos={ productos } />
    </>
  );
}
