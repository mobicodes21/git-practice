import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRandomNumber = 
createAsyncThunk(
    'counter/fetchRandomNumber',
    async()=>{
        const response = await new Promise((res)=>
        setTimeout(() => res(Math.floor(Math.random() * 10)), 1000));
        return response;
    }
)

const counterSlice = createSlice({
    name: 'counter',
    initialState :{
        value: 0,
    status: 'idle', 
    },
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        decrement:(state)=>{
            state.value -=1
        },
        incrementBuAmount:(state, action)=>{
            state.value += action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchRandomNumber.pending, (state)=>{
            state.status = 'loading'
        })
        .addCase(fetchRandomNumber.fulfilled, (state, action)=>{
            state.status = 'succeeded';
            state.value += action.payload
        })
        .addCase(fetchRandomNumber.rejected, (state, action)=>{
            state.status = 'failed'
        })
    }
})

export const {increment, decrement, incrementBuAmount} = counterSlice.actions

export default counterSlice.reducer