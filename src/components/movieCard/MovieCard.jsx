import "./MovieCard.css";
import { useState } from "react";

export function MovieCard({ title, description, posterURL, rating }) {
  const [like, setlike] = useState("unlike");
  function handleLike() {
    let parent = document.getElementById("heartBtn");
    let child = parent.querySelector("#heartIcn");

    if (like === "like") {
      setlike("unlike");
      child.className = "fa-regular fa-heart";
    } else {
      setlike("like");
      child.className = "fa-solid fa-heart";
    }
  }

  return (
    <div className="MovieCardContainer">
      <p>{title}</p>
      <p>{description}</p>
      <p>{rating}</p>
      <button
        id="heartBtn"
        onClick={handleLike}
        className={`heartButton-${like}`}
      >
        <i id="heartIcn" className="fa-regular fa-heart"></i>
      </button>
      <button onClick={handleLike} className={`deleteButton-${like}`}>
        <i className="fa-regular fa-trash"></i>
      </button>
    </div>
  );
}

export default MovieCard;
