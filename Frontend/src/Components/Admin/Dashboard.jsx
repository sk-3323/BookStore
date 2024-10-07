import axios from "axios";
import React, { useEffect, useState } from "react";
const Dashboard = () => {
  const [freebooks, setFreeBook] = useState([]);
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState([]);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();

    const fetchFreeBook = async () => {
      try {
        const free = await axios.get("http://localhost:3000/book/getfreebook");
        setFreeBook(free.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFreeBook();

    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/user/totalusers`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();

    const fetchContacts = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/user/contacts`);
        setContacts(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchContacts();
  }, []);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Total Books</h2>
          <p className="text-4xl font-bold">{books.length}</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Total Free Books</h2>
          <p className="text-4xl font-bold">{freebooks.length}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">Total Users</h2>
          <p className="text-4xl font-bold">{user.length}</p>
        </div>
      </div>
      {/* Card 3 */}
      {/* Other content like charts, tables, or recent activities */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Recent Queries from User</h2>
        <ul className="space-y-4">
          {contacts.length === 0 ? (
            <h1>No Record Available</h1>
          ) : (
            contacts.map((elem) => {
              return (
                <li className="bg-white p-4 shadow-md rounded-lg">
                  <p>
                    <span className="font-bold">
                      {elem.fname + " " + elem.lname}
                    </span>
                  </p>
                  <p>
                    <span className="text-gray-600">{elem.msg}</span>
                  </p>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
