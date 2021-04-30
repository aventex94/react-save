import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Product = ({}) => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state);
  
  return (
    <div>
      {productos.product.map((p) => (
        <p key={p.id}>{p.monto}</p>
      ))}

      <button  >Agregar producto</button>
    </div>
  );
};

export default Product;
