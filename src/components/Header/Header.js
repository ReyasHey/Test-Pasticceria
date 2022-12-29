import "./Header.css";
import Logo from "../../imgs/logo.png"
import Cart from "../../imgs/cart.svg"

const Header = () => {
  return (
    <header>
      <a href="" className="logo">
        <img src={ Logo } alt="Test Shop Logo"/>
      </a>

      <nav style={{ justifySelf: "center", margin: "auto"}}>
        <ul style={{ display: "flex", gap: "1vw" }}>
          <li><a href="">Home</a></li>
          <li><a href="">Sweets</a></li>
          <li><a href="">About</a></li>
        </ul>
      </nav>

      <div className="loginSignin">
        <button className="chocolateButton">Log In</button>
        <button className="chocolateButton">Sign in</button>
        <button className="chocolateButton"
                style={{  height: "6vh",
                          width: "6vh" ,
                          borderRadius: "50%",
                          paddingTop: "0.7rem"
        }}>
          <img src={ Cart } alt="Cart Button" style={{ width: "100%", height: "100%" }}/>
        </button>
      </div>
    </header>
  )
}

export default Header
