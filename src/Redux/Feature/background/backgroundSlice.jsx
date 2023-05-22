import { createSlice } from "@reduxjs/toolkit";
import candybg from "./../../../asset/image/bg.webp"
import candybg2 from "./../../../asset/image/bg2.webp";
import candybg3 from "./../../../asset/image/bg3.webp";
import foodbg from "./../../../asset/image/bg4.webp";
import foodbg2 from "./../../../asset/image/bg5.webp";
import foodbg3 from "./../../../asset/image/bg6.webp";
import swampbg from "./../../../asset/image/bg7.webp";
import swampbg2 from "./../../../asset/image/bg8.webp";
import swampbg3 from "./../../../asset/image/bg9.webp";

export const BGIMAGES = [
    candybg,
    candybg2,
    candybg3,
    foodbg,
    foodbg2,
    foodbg3,

]


const initialState = {
    bgColor: "pink",
    bg1: candybg,
    bg2: candybg2,
    bg3: candybg3,
};

const backgroundSlice = createSlice({
    name: "background",
    initialState,
    reducers: {
        changeBg(state, action) {
            switch (action.payload) {
                case "candy":
                    state.bgColor = "pink";
                    state.bg1 = candybg;
                    state.bg2 = candybg2;
                    state.bg3 = candybg3;
                    break;
                case "food":
                    state.bgColor = "rgb(158, 211, 255)";
                    state.bg1 = foodbg;
                    state.bg2 = foodbg2;
                    state.bg3 = foodbg3;
                    break;
                case "swamp":
                    state.bgColor = "#96be25";
                    state.bg1 = swampbg;
                    state.bg2 = swampbg2;
                    state.bg3 = swampbg3;
                    break;
                default:
                    break;
            }
        },
        resetBg(state) {
            state.bgColor = "pink";
            state.bg1 = candybg;
            state.bg2 = candybg2;
            state.bg3 = candybg3;
        }
    }
});


export const { changeBg, resetBg } = backgroundSlice.actions;

export const selectBackground = (state) => state.background;

export default backgroundSlice.reducer;
