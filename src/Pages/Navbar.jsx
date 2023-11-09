import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between'>
      <Link to="/">
        <h1 className='text-3xl font-semibold text-white'>CRUD OPERATIONS</h1>
      </Link>
      <Link to="add-user">
        <button className='w-48 bg-white text-blue-400 font-semibold text-xl h-12 rounded-lg'>
          Add User
        </button>
      </Link>
    </div>
  );
}

export default Navbar;
