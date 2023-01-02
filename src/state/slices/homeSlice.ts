import { createSlice } from "@reduxjs/toolkit";


interface HomeSlice {
    members: number
}

const initialState: HomeSlice = {
    members: 29128
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        increment: (state) => {
            state.members += 1
        },
        decrement: (state) => {
            state.members -= 1
        }
    }
})

export const { increment, decrement } = homeSlice.actions
export default homeSlice.reducer