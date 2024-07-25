import React from 'react';

const Chat: React.FC = () => {
  return (
    <div className="flex-1 bg-discord-background-primary p-4 flex flex-col">
      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto pr-2">
        {/* Mensajes del chat */}
        <div className="bg-discord-background-secondary text-discord-text-primary p-3 rounded-lg mb-2 max-w-xs">
          Mensaje 1
        </div>
        <div className="bg-discord-background-secondary text-discord-text-primary p-3 rounded-lg mb-2 max-w-xs self-end">
          Mensaje 2
        </div>
        {/* Agrega más mensajes aquí */}
      </div>

      {/* Campo de entrada de mensaje */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Escribe un mensaje..."
          className="w-full p-3 bg-discord-background-tertiary text-discord-text-primary rounded-lg border border-discord-border focus:outline-none focus:ring-2 focus:ring-discord-primary"
        />
      </div>
    </div>
  );
};

export default Chat;