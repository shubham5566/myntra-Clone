
import {configureStore} from '@reduxjs/toolkit'

import itemSlice from './itemSlice'
import fetchStatusSlice from './fetchingStatusSlice'
import bagSlice from './bagSlice'



const myStore = configureStore({
    reducer:{
        items:itemSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
        bag:bagSlice.reducer,
      
    }
})
export default myStore



