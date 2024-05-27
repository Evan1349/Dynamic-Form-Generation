import { configureStore } from '@reduxjs/toolkit';
import columnsReducer from './ColumnsSlice';

const store = configureStore({
    reducer:{
        columns: columnsReducer,
    }
})

export default store;