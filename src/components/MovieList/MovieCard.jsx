import React from "react";
import "./MovieCard.css";
import Star from "../../assets/star.png";

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://cdn.shopify.com/s/files/1/1057/4964/files/10-Best-Movie-Posters-of-All-Time_480x480.webp?v=1712251697"
        alt="movie poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="align_center movie_date_rate">
          <p>10-20-2020</p>
          <p>
            8.0 <img src={Star} alt="rating icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque amet
          aliquam recusandae libero numquam reiciendis?
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
