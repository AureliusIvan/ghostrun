import { configureStore } from "@reduxjs/toolkit";
import backgroundReducer from "./Feature/background/backgroundSlice"
import gameStateReducer from "./Feature/gameState/gameStateSlice"

export const store = configureStore({
    reducer: {
        background: backgroundReducer, 
        gameState: gameStateReducer,
    },
});