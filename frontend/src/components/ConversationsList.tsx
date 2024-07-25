import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { fetchConversations, Conversation } from '../states/conversationsSlice';

const ConversationsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const conversations = useSelector((state: RootState) => state.conversations.conversations);
  const loading = useSelector((state: RootState) => state.conversations.loading);
  const error = useSelector((state: RootState) => state.conversations.error);

  useEffect(() => {
    dispatch(fetchConversations(1));
  }, [dispatch]);

  if (loading) {
    return <div className="text-discord-text-secondary">Loading...</div>;
  }

  if (error) {
    return <div className="text-discord-notification">Error: {error}</div>;
  }

  return (
    <div className="flex-1 flex flex-col bg-discord-background-secondary p-4 overflow-y-auto">
      {conversations.map((conversation: Conversation) => {
        const otherParticipant = conversation.participants.find(participant => participant.id !== 1);
        return (
          <div key={conversation.id} className="flex items-center py-2 hover:bg-discord-background-tertiary rounded-lg cursor-pointer">
            {otherParticipant && (
              <>
                <img src={otherParticipant.avatar} alt={otherParticipant.name} className="w-12 h-12 rounded-full mr-4" />
                <span className="text-discord-text-primary text-lg">{otherParticipant.name}</span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ConversationsList;