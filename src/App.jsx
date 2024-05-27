import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Checkbox, Divider, Table } from 'antd';
import { mockData, mockColumns} from './Redux/Mockdata';
import { setCheckedList } from './Redux/ColumnsSlice';


const App = () => {
  const dispatch = useDispatch();
  const checkedList = useSelector((state)=>state.columns.checkedList)

  const options = mockColumns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  const newColumns = mockColumns.filter((item)=> checkedList.includes(item.key));

  return (
    <>
      <Divider>Columns displayed</Divider>
      <Checkbox.Group
        value={checkedList}
        options={options}
        onChange={(value) => {
          dispatch(setCheckedList(value));
        }}
      />

      <Table
        columns={newColumns}
        dataSource={mockData}
        style={{marginTop: 24}}
        rowKey= 'key'
      />
    </>
  );
};
export default App;


