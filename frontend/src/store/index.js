
import {configureStore} from '@reduxjs/toolkit'

import itemSlice from './itemSlice'
import fetchStatusSlice from './fetchingStatusSlice'



const myStore = configureStore({
    reducer:{
        items:itemSlice.reducer,
        fetchStatus:fetchStatusSlice.reducer,
      
    }
})
export default myStore



