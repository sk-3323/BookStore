import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const SingleBook = () => {
  const { id } = useParams();
  const loggeduser = useSelector((store) => store.signup.username);
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/book/${id}`, {
          withCredentials: true,
        });
        setBook(res.data);
      } catch (err) {
        if (err.code === "ERR_NETWORK") {
          console.error(
            "Network error: Could not reach the server. Please check if the backend is running."
          );
        } else {
          console.error("An error occurred:", err);
        }
        setError(err);
      } finally {
        setLoading(false); // Always stop loading
      }
    };

    fetchBook();
  }, [id]);

  if (loading) {
    return <LoadingSpinner />; // Display loading message while data is being fetched
  }

  if (error) {
    return (
      <div>
        <p>Oops! Something went wrong. Please try again later.</p>
        <p>{error.message}</p> {/* Display error message */}
      </div>
    );
  }

  if (!book) {
    return toast.error("Book not find"); // Handle case where book is not found
  }

  return (
    <>
      {loggeduser ? (
        <>
          <h1 className="text-center leading-none tracking-tight text-3xl">
            Book Details
          </h1>
          <hr className="mt-5" />
          <div className="w-full flex justify-center items-center h-[80vh]">
            <div className="w-1/3 grid place-content-center">
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727222400&semt=ais_hybrid"
                alt=""
              />
            </div>
            <div className="w-1/2 text-xl leading-10">
              <h1>Title : {book.title}</h1>
              <h1>Description : {book.description}</h1>
              <h1>Author : {book.author}</h1>
              <h1>Publish Year : {book.year}</h1>
              <h1>Price : {book.price} .$</h1>
              <h1>Category : {book.categories}</h1>
              <button className="px-4 py-0 mt-5 bg-cyan-400 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </>
      ) : (
        navigate("/signup")
      )}
    </>
  );
};

export default SingleBook;
