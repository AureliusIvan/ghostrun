import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoaded: {
        all: false,
        bg1: false,
        bg2: false,
        bg3: false,
    },
    isGameStart: false,
    isGameEnd: false,
    Score: 0,
};

const gameStateSlice = createSlice({
    name: "gameState",
    initialState,
    reducers: {
        loaded(state) {
            state.isLoaded = {
                bg1: true,
                bg2: true,
                bg3: true,
            };
        },
        allloaded(state) {
            state.isLoaded = {
                all: true
            };
        },
        startGame(state) {
            state.isGameStart = true;
        }
    }
});


export const { loaded, allloaded, startGame } = gameStateSlice.actions;
export const selectGameState = (state) => state.gameState;
export default gameStateSlice.reducer;