import "./Product.css"

import Overlayer from "./Overlayer/Overlayer";
import { useState } from "react";

function Product({ name, price, amount, img, ingredients }) {
  const [overlayer, setOverlayer] = useState(0);

  return (
    <li className="productCard" onClick={ () => setOverlayer(1) }>
      <h3 style={{ textAlign: "center" }}>{ name }</h3>
      <img src={ img } alt={ name } className="productImg" />

      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 1.5rem" }}>
        <div>
          <p>{ price }€</p>
          <p>Available: { amount }</p>
        </div>

        <div style={{ paddingTop: "2%" }}>
          <button className="cartButton">Add to cart</button>
        </div>
      </div>
    </li>
  )
}

export default Product
