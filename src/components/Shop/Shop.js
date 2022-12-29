import "./Shop.css";

import HeroBanner from "../../imgs/hero-banner.jpg";
import ProductsBanner from "./ProductsBanner/ProductsBanner";

function HeroContent() {
  return (
    <main>
        <article className="heroBanner" style={{ backgroundImage: `url(${HeroBanner})` }}>
          <h1>Sweets made with passion</h1>
          <p>Browse a vast selection of sweets delivered straight to your home</p>
        </article>
        <ProductsBanner />
    </main>
  )
}

export default HeroContent
