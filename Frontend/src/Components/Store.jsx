import React from "react";
import books from "../../public/books.json";
import Card from "./Card";
import { Link } from "react-router-dom";
const Store = () => {
  const book = books.response.books;
  return (
    <>
      <div className="w-full min-h-screen">
        <h1 className="text-3xl mt-11 text-center font-bold">
          We're delighted to have you{" "}
          <span className="text-3xl text-pink-500">Here !:)</span>
        </h1>
        <div className="paragraph flex justify-center items-center mt-8 flex-col gap-5">
          <p className="md:w-1/2 text-center">
            Everything you need for better future and success has already been
            written. And guess what? All you have to do is go to the library.
          </p>
          <Link to="/">
            <button className="btn bg-pink-400 font-bold border-0 btn-outline rounded-lg px-10">
              Back
            </button>
          </Link>
        </div>
        <div className="w-full min-h-screen flex justify-center items-center flex-wrap gap-5 mt-9">
          {book.map((elem) => (
            <Card elem={elem} key={elem.id}></Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Store;
