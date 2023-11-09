import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`http://localhost:3003/users/${id}`).then((responce) => {
      setUser(responce.data);
    });
  }, [id]);
  return (
    <div className="w-full h-[89.5vh] flex flex-col justify-center items-center">
      {user && (
        <>
          <div className="w-[700px] h-[150px] flex justify-center items-center border border-black px-6 py-4">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="font-semibold text-2xl">Name</h2>
              <h2 className="font-semibold text-2xl">Email</h2>
              <h2 className="font-semibold text-2xl">Phone</h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4">
              <h2 className="font-semibold text-2xl">{user.name}</h2>
              <h2 className="font-semibold text-2xl">{user.email}</h2>
              <h2 className="font-semibold text-2xl">{user.phone}</h2>
            </div>
          </div>
        </>
      )}
      <Link to="/" className="font-semibold text-2xl mt-10">Back to Home</Link>
    </div>
  );
}

export default User;
