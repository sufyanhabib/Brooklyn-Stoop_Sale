import { Link } from "react-router-dom";
import plant from "../img/plant.png";
import "../App.css";

function NavBar() {
  return (
    <>
    <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sales">Sales</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <img src={plant} alt="plant" className="plant" />
    <section className="divider">
     <h2><span style="color: pink;">Chelsea</span> & <span style="color: black;">Lil's</span> Brooklyn Stoop Sale Invitation ✉<br />Join us for a fun-filled day of treasures and treats on the stoop!</h2>
    </section>
    <img src={plant} alt="plant" className="plant-background" />
    <img src={plant} alt="plant" className="plant-background bottom" />
     
    </header>
  </>
  );
}

export default NavBar;
