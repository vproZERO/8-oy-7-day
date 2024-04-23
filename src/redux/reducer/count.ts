import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state, action) => {
            return { ...state, count: state.count + 1 };
          },
        decrement: (state, action) => {
            return { ...state, count: state.count - 1 };
        }
    }
})

export default counterSlice.reducer

export const { increment, decrement} = counterSlice.actions