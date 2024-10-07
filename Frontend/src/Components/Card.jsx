import React from "react";
import book from "../assets/book.png";
import { Link } from "react-router-dom";

const Card = ({ elem }) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl object-cover">
        <figure>
          <img src={book} alt="books" height={200} width={200} />
        </figure>
        <div className="card-body">
          <div className="flex gap-5">
            <h2 className="card-title">{elem.title}</h2>
            {elem.categories?.toLowerCase().trim() === "free" && (
              <div className="badge badge-accent mt-1">{elem.categories}</div>
            )}
          </div>
          <p>{elem.description}</p>
          <div className="card-actions justify-between mt-3">
            <div className="badge badge-ghost mt-1">$. {elem.price}</div>
            <Link to={`/store/book/${elem._id}`}>
              <button className="btn btn-primary btn-sm">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
