import React from 'react';

const Groupbar: React.FC = () => {
  const servers = [
    { id: 1, icon: '/path/to/server1.png' },
    { id: 2, icon: '/path/to/server2.png' },
    { id: 3, icon: '/path/to/server3.png' },
  ];

  return (
    <div className="w-16 bg-gray-800 flex flex-col items-center py-4">
      {servers.map(server => (
        <img
          key={server.id}
          src={server.icon}
          alt={`Server ${server.id}`}
          className="w-12 h-12 mb-4 rounded-full cursor-pointer"
        />
      ))}
    </div>
  );
};

export default Groupbar;