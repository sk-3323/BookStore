import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";
import toast from "react-hot-toast";
const Course = () => {
  const [book, setBook] = useState([]);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    setTimeout(() => {
      axios
        .get("http://localhost:3000/book")
        .then((res) => {
          setBook(res.data);
          setFetching(false);
        })
        .catch((err) => toast.error(err.response.data.message));
    }, 3000);
  }, []);
  const freeBook = book.filter((books) => {
    return books.categories === "free" && books.price === 0;
  });

  return (
    <>
      <div className="w-full min-h-screen flex flex-col p-5 gap-5 items-center">
        <h1 className="text-5xl tracking-tight font-bold">Free Courses</h1>
        <span className="mt-5">
          These free courses in a wide variety of subjects have been hand-picked
          by the learning team at Coursera.
        </span>
        <div className="w-full bg-slate-500 h-0.5 opacity-5"></div>
        <div className="courses flex justify-center items-center gap-10 w-full flex-wrap mt-11">
          {fetching ? (
            <LoadingSpinner />
          ) : (
            freeBook.map((elem) => <Card elem={elem} key={elem.id} />)
          )}
        </div>
      </div>
    </>
  );
};

export default Course;
