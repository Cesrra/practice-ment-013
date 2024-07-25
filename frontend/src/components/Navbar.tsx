import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUsers } from '../states/usersSlice';
import { RootState, AppDispatch } from '../store';

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [query, setQuery] = useState('');
  
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);

    // Realiza la búsqueda solo si hay una consulta
    if (newQuery.trim()) {
      dispatch(searchUsers(newQuery));
    }
  };

  return (
    <div className="bg-discord-background-secondary p-4 flex items-center">
      <input
        type="text"
        placeholder="Find or start a conversation"
        value={query}
        onChange={handleSearch}
        className="bg-discord-background-tertiary text-discord-text-primary p-2 rounded-lg w-full max-w-xs border border-discord-border focus:outline-none focus:ring-2 focus:ring-discord-primary"
      />

      {loading && <div className="text-discord-text-secondary ml-4">Loading...</div>}
      {error && <div className="text-discord-notification ml-4">Error: {error}</div>}
      
      <div className="mt-4">
        {/* Aquí puedes renderizar los resultados de búsqueda si es necesario */}
        <ul>
          {users.map(user => (
            <li key={user.id} className="flex items-center mb-2">
              <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;