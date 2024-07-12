import React from 'react';

const FriendsList: React.FC = () => {
  const friends = [
    { id: 1, name: 'John Doe', status: 'Online', avatar: '/path/to/user1.png' },
    { id: 2, name: 'Jane Doe', status: 'Idle', avatar: '/path/to/user2.png' },
    { id: 3, name: 'Sam Smith', status: 'Do Not Disturb', avatar: '/path/to/user3.png' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-gray-700 p-4 overflow-y-auto">
      {friends.map(friend => (
        <div key={friend.id} className="flex items-center py-2">
          <img src={friend.avatar} alt={friend.name} className="w-10 h-10 rounded-full mr-4" />
          <span>{friend.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FriendsList;