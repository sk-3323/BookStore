import axios from "axios";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const navigate = useNavigate();
  const [err, setErr] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const formdata = new FormData(e.target);
    const title = formdata.get("title");
    const author = formdata.get("author");
    const price = parseInt(formdata.get("price"));
    const description = formdata.get("description");
    const categories = formdata.get("categories");
    const year = parseInt(formdata.get("year"));

    // Create data object to send to the server
    const data = {
      title,
      author,
      description,
      price,
      categories,
      year,
    };

    try {
      // Sending a POST request to add the book
      const res = await axios.post("http://localhost:3000/book/addbook", data, {
        withCredentials: true,
      });
      toast.success(res.data.message || "Book added successfully!");
      navigate("/admin/books");
      window.location.reload();
    } catch (error) {
      // Log the error and show an error message
      console.log(error.response.data.message);
      setErr(error.response.data.message);

      console.error(
        "Error:",
        error.response.data.errors.map((err) => console.log(err.message))
      );
    }
  };

  return (
    <div>
      <div className="px-8">
        <h1 className="text-3xl font-bold mb-4">Add a New Book</h1>
        {err && <p className="text-red-500">{err}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block">Title:</label>
            <input type="text" className="border p-2 w-full" name="title" />
          </div>
          <div className="mb-4">
            <label className="block">Author:</label>
            <input type="text" className="border p-2 w-full" name="author" />
          </div>
          <div className="mb-4">
            <label className="block">Description:</label>
            <textarea className="border p-2 w-full" name="description" />
          </div>
          <div className="mb-4">
            <label className="block">Publish Year:</label>
            <input type="text" className="border p-2 w-full" name="year" />
          </div>
          <div className="mb-4">
            <label className="block">Select Category</label>
            <select name="categories" id="" className="border p-2 w-full">
              <option value="free">Free</option>
              <option value="science finction">Science And Finction</option>
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
            <input type="text" className="border p-2 w-full" name="price" />
          </div>
          <button className="bg-blue-500 text-white p-2 rounded" type="submit">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
