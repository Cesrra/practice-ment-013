import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

export interface User {
  id: number;
  name: string;
  avatar: string;
  email: string;
  phone?: string;
}

export interface Message {
  id: number;
  senderId: number;
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: number;
  participants: User[];
  messages: Message[];
}

export interface ConversationsState {
  conversations: Conversation[];
  loading: boolean;
  error: string | null;
}

const initialState: ConversationsState = {
  conversations: [],
  loading: false,
  error: null,
};

const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    getConversationsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getConversationsSuccess(state, action: PayloadAction<Conversation[]>) {
      state.loading = false;
      state.conversations = action.payload;
      state.error = null;
    },
    getConversationsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addMessageToConversation(state, action: PayloadAction<{ conversationId: number; message: Message }>) {
      const conversation = state.conversations.find(conv => conv.id === action.payload.conversationId);
      if (conversation) {
        conversation.messages.push(action.payload.message);
      }
    },
  },
});

export const { getConversationsStart, getConversationsSuccess, getConversationsFailure, addMessageToConversation } = conversationsSlice.actions;

export default conversationsSlice.reducer;

export const fetchConversations = (userId: number): AppThunk => async (dispatch) => {
  try {
    dispatch(getConversationsStart());
    const response = await fetch(`https://chatapp-zdie.onrender.com/user/peers/${userId}`);
    if (!response.ok) {
      throw new Error('Failed to fetch conversations');
    }
    const conversations = await response.json();
    dispatch(getConversationsSuccess(conversations));
  } catch (error) {
    dispatch(getConversationsFailure("Failed to fetch conversations"));
  }
};