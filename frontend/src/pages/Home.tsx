import React from 'react';
import Groupbar from '../components/Groupbar';
import FriendsList from '../components/FriendsList';
import UserDetails from '../components/UserDetails';
import Navbar from '../components/Navbar';
import Chat from '../components/Chat';
import '../index.css';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen w-full">
      <Groupbar />
      <div className="flex flex-col w-60">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <FriendsList />
          <UserDetails />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <Chat />
      </div>
    </div>
  );
};

export default Home;