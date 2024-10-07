import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState([]);
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
          toast.error(err.response.data.message);
        }
      }
    };

    fetchBook();
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: book.title,
      author: book.author,
      description: book.description,
      price: parseInt(book.price),
      categories: book.categories,
      year: parseInt(book.year),
    };

    try {
      await axios.put(`http://localhost:3000/book/${id}`, data, {
        withCredentials: true,
      });
      toast.success("Book updated successfully!");
      navigate("/admin/books");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update the book.");
    }
  };

  return (
    <div className="px-8">
      <h1 className="text-3xl font-bold mb-4">Update a Book</h1>
      <form onSubmit={handleSubmit} method="put">
        <div className="mb-4">
          <label className="block">Title:</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={book.title}
            name="title"
            onChange={handleInputChange} // Update state when input changes
          />
        </div>
        <div className="mb-4">
          <label className="block">Author:</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={book.author}
            name="author"
            onChange={handleInputChange} // Update state when input changes
          />
        </div>
        <div className="mb-4">
          <label className="block">Description:</label>
          <textarea
            className="border p-2 w-full"
            value={book.description}
            name="description"
            onChange={handleInputChange} // Update state when input changes
          />
        </div>
        <div className="mb-4">
          <label className="block">Publish Year:</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={book.year}
            name="year"
            onChange={handleInputChange} // Update state when input changes
          />
        </div>
        <div className="mb-4">
          <label className="block">Select Category</label>
          <select
            name="categories"
            id="categories"
            className="border p-2 w-full"
            value={book.categories}
            onChange={handleInputChange} // Update state when input changes
          >
            <option value="free">Free</option>
            <option value="science fiction">Science And Fiction</option>
            <option value="health">Health</option>
            <option value="education">Education</option>
            <option value="business">Business</option>
            <option value="cooking">Cooking</option>
            <option value="travel">Travel</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
            <option value="sports">Sports</option>
            <option value="comic">Comic</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block">Price</label>
          <input
            type="text"
            className="border p-2 w-full"
            value={book.price}
            name="price"
            onChange={handleInputChange} // Update state when input changes
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBook;
