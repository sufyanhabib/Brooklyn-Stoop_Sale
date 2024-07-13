import { Link } from "react-router-dom";
import plant from "../img/plant.png";
import "../App.css";

function NavBar() {
  return (
    <>
    <header>
    <nav>
      <ul>
        <li><Link to="/" className="active nav-link">Home</Link></li>
        <li><Link to="/sales" className="nav-link">Sales</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
      </ul>
    </nav>
    <img src={plant} alt="plant" className="plant" />
    <section className="divider">
    <h2><em className="pink">Chelsea</em> & <em className="black">Lil&apos;s</em> Brooklyn Stoop Sale Invitation<br />Join us for a fun-filled day of treasures and treats on the stoop!</h2>
    </section>
    <img src={plant} alt="plant" className="plant-background" />
    <img src={plant} alt="plant" className="plant-background bottom" />
     
    </header>
  </>
  );
}

export default NavBar;
