import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { UserProfile } from "../utils/types";

const initialState = null as UserProfile | null;

export const userSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        putUser: (state, action: PayloadAction<UserProfile>) => {
            return action.payload;
        },
        logOutUser: (state) => null,


    }

})

export const { putUser, logOutUser } = userSlice.actions;
export default userSlice.reducer;

