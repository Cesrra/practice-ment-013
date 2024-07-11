import React from 'react';

const Chat: React.FC = () => {
  return (
    <div className="flex-1 bg-gray-600 p-4 flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {/* Aquí irían los mensajes del chat */}
        <div className="bg-gray-700 p-2 rounded mb-2">Mensaje 1</div>
        <div className="bg-gray-700 p-2 rounded mb-2">Mensaje 2</div>
        {/* Agrega más mensajes aquí */}
      </div>
      <div className="mt-4">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="w-full p-2 bg-gray-800 text-white rounded"
        />
      </div>
    </div>
  );
};

export default Chat;