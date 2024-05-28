import React from "react";
import book from "../assets/book.png";

const Card = ({ elem }) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl object-cover">
        <figure>
          <img src={book} alt="books" height={200} width={200} />
        </figure>
        <div className="card-body">
          <div className="flex gap-5">
            <h2 className="card-title">{elem.title.substring(0, 26)}</h2>
            {elem.categories.length === 0 ? (
              ""
            ) : (
              <div className="badge badge-accent mt-1">
                {elem.categories.substring(0, 6)}
              </div>
            )}
          </div>
          <p>{elem.description.substring(0, 150)}</p>
          <div className="card-actions justify-between mt-3">
            <div className="badge badge-ghost mt-1">$. {elem.price}</div>
            <button className="btn btn-primary btn-sm">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
