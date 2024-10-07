import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Card from "../Card";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DisplayBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // Fetch all books from backend API
    axios
      .get("http://localhost:3000/book")
      .then((response) => setBooks(response.data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  const handleDelete = async (bookId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        try {
          // Sending DELETE request to the server
          const res = await axios.delete(
            `http://localhost:3000/book/${bookId}`,
            {
              withCredentials: true,
            }
          );

          navigate("/admin/books");
          window.location.reload();
          // Redirect after successful deletion
        } catch (error) {
          // Log error and show error toast
          console.error("Error deleting the book:", error);

          if (error.response && error.response.data) {
            toast.error(
              error.response.data.message || "Failed to delete the book."
            );
          } else {
            toast.error("An unexpected error occurred.");
          }
        }
      }
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">All Books</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Year</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr>
                <th>{book.title}</th>
                <th>{book.author}</th>
                <th>{book.year}</th>
                <th>{book.categories}</th>
                <th>{book.price} .$</th>
                <td className="flex gap-4">
                  <Link
                    to={`/admin/update-book/${book._id}`}
                    className="btn btn-warning"
                  >
                    {" "}
                    Edit
                  </Link>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleDelete(book._id)}
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayBooks;
