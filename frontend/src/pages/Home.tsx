import React from 'react';
import Groupbar from '../components/Groupbar';
import FriendsList from '../components/ConversationsList';
import UserDetails from '../components/UserDetails';
import Navbar from '../components/Navbar';
import Chat from '../components/Chat';
import '../index.css';

const Home: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Barra lateral de grupos */}
      <div className="w-20 bg-discord-background-secondary flex flex-col">
        <Groupbar />
      </div>

      <div className="flex flex-col w-72 bg-discord-background-primary">
        {/* Navbar */}
        <Navbar />

        {/* Contenido principal (lista de amigos y detalles del usuario) */}
        <div className="flex-1 overflow-auto">
          <FriendsList />
          <UserDetails />
        </div>
      </div>

      {/* Área de chat */}
      <div className="flex-1 bg-discord-background-secondary">
        <Chat />
      </div>
    </div>
  );
};

export default Home;