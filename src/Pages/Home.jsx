import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    axios.get("http://localhost:3003/users").then((responce) => {
      setUsers(responce.data.reverse());
    });
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const DeleteHandler = (id) => {
    axios.delete(`http://localhost:3003/users/${id}`).then(() => loadUsers());
  };
  return (
    <div className="w-full h-full flex flex-col py-10 px-8">
      <div className="w-[80%] text-center mt-8 mx-auto overflow-hidden">
        <h1 className="text-3xl font-semibold text-center">Home Page</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center text-sm font-light">
                  <thead className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
                    <tr>
                      <th scope="col" className=" px-6 py-4">
                        #
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Phone
                      </th>
                      <th scope="col" className=" px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => {
                      return (
                        <tr
                          key={user.id}
                          className="border-b dark:border-neutral-500"
                        >
                          <td className="whitespace-nowrap  px-6 py-4 font-medium">
                            {user.id}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {user.name}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {user.email}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4">
                            {user.phone}
                          </td>
                          <td className="whitespace-nowrap  px-6 py-4 flex space-x-4 justify-center">
                            <Link
                              to={`/users/${user.id}`}
                              className="px-6 py-2 text-white bg-black rounded-lg font-normal"
                            >
                              View
                            </Link>
                            <Link to={`/edit-user/${user.id}`}>
                              <button className="px-6 py-2 text-white bg-blue-600 rounded-lg font-normal">
                                Edit
                              </button>
                            </Link>
                            <button
                              onClick={() => {
                                DeleteHandler(user.id);
                              }}
                              className="px-6 py-2 text-white bg-red-600 rounded-lg font-normal"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
