import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import plant from "../img/plant.png";
import "../App.css";
import nature from "../img/nature.mp3";

function NavBar() {

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Ref to store the audio element

  const handlePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };


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
    <h2><em className="pink">Chelsea</em>   <button className="play-button" onClick={handlePlayPause}>
    {isPlaying ?   <i className="fa fa-play"></i> : <i className="fa fa-pause"></i>}
  </button><em className="black">Lil&apos;s</em> Brooklyn Stoop Sale Invitation<br />Join us for a fun-filled day of treasures and treats on the stoop!</h2>
    </section>
    <img src={plant} alt="plant" className="plant-background" />
    <img src={plant} alt="plant" className="plant-background bottom" />
    </header>
    <audio ref={audioRef} src={nature} />
  </>
  );
}

export default NavBar;
