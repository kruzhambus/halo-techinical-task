import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export enum Position {
    'Home',
    'Our mission',
    'Places',
    'Team'
}

interface NavigationSlice {
    menuIsOpen: boolean,
    currentPosition: Position
}

const initialState: NavigationSlice = {
    menuIsOpen: false,
    currentPosition: Position.Home
}

export const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.menuIsOpen = !state.menuIsOpen
        },
        setCurrentPosition: (state, action: PayloadAction<Position>) => {
            state.currentPosition = action.payload;
        }
    }
})

export const { toggleMenu, setCurrentPosition } = navigationSlice.actions
export default navigationSlice.reducer