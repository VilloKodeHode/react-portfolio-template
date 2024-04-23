import { Link } from "react-router-dom";
import "./header.css"


export const Header = () => {
    //TODO Put in a hamburgermeny yourself. Should work responsivly
  return (
    <header>
      <figure>
        <img src="/grumpy_bg.jpg" alt="" />
      </figure>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};
