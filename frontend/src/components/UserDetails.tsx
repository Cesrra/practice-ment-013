import React from 'react';

const UserDetails: React.FC = () => {
  return (
    <div className="bg-gray-800 p-4 flex items-center">
      <img src="/path/to/user.png" alt="User" className="w-10 h-10 rounded-full mr-4" />
      <span>Current User</span>
    </div>
  );
};

export default UserDetails;