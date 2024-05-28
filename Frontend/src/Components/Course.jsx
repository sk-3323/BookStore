import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import booksList from "../../public/books.json";
import Card from "./Card";
const Course = () => {
  let booklist = booksList.response.books;
  const freeBook = booklist.filter((book) => {
    return book.categories === "free";
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
          {freeBook.map((elem) => (
            <Card elem={elem} key={elem.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
