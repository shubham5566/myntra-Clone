import {createSlice} from '@reduxjs/toolkit'


const fetchStatusSlice = createSlice({
    name:'fetching',
    initialState: {

        fetchingDone:false,
        currentFetching:false

    },
    reducers:{
        markFechDone: (state)=>{
            return state.fetchingDone = true
        },
        markFectStart: (state)=>{
            return state.currentFetching =true
        },
        markFechingFinish: (state)=>{
            return state.currentFetching = false
        }
    }
})
export const fetchStatusSlices = fetchStatusSlice.actions

export default fetchStatusSlice