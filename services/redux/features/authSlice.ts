import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name:"user",
    initialState: {
        currentUser: null,
        currentSchool: null
    },
    reducers: {
        login: (state, action) => {
         state.currentUser = action.payload

        },
        logout: (state, action) => {
            state.currentUser = null
        },
    } 
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;