// src/states/usersSlice.ts
import { createSlice, createAsyncThunk, PayloadAction, AsyncThunk } from '@reduxjs/toolkit';

// Define las interfaces para los tipos de datos
interface User {
  id: number;
  name: string;
  avatar: string;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}

// Estado inicial
const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

// Acción asíncrona para buscar usuarios
export const searchUsers: AsyncThunk<User[], string, Record<string, never>> = createAsyncThunk(
  'users/searchUsers',
  async (query: string) => {
    const response = await fetch(`https://chatapp-zdie.onrender.com/users/peers=${query}`);
    if (!response.ok) {
      throw new Error('Error al buscar usuarios');
    }
    const data: User[] = await response.json();
    return data;
  }
);

// Crear el slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(searchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error al buscar usuarios';
      });
  },
});

export default usersSlice.reducer;
