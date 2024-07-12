import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="bg-gray-700 p-4 flex justify-between items-center">

      <input
        type="text"
        placeholder="Find or start a conversation"
        className="bg-gray-600 text-white p-2 rounded"
      />
    </div>
  );
};

export default Navbar;