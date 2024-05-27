import { createSlice } from '@reduxjs/toolkit';
import { mockColumns } from './Mockdata'

const initialState = {
    checkedList : mockColumns.map((item) => item.key)
};

const columnsSlice = createSlice({
    name: 'columns',
    initialState,
    reducers:{
        setCheckedList: (state, action) =>{
            state.checkedList = action.payload;
        },
    },
});

export const { setCheckedList } = columnsSlice.actions;
export default columnsSlice.reducer;