import React from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';

const TableBill = (props) => {
  
  const table1Orders = props.orders.filter((order) => order.table === 'Table 1');
  const table2Orders = props.orders.filter((order) => order.table === 'Table 2');
  const table3Orders = props.orders.filter((order) => order.table === 'Table 3');

  return (
    <div>
      {table1Orders.length > 0 && (
        <Table1 orders={table1Orders} onRemove={props.onDelete}/>
      )}
      {table2Orders.length > 0 && (
        <Table2 orders={table2Orders} onRemove={props.onDelete}/>
      )}
      {table3Orders.length > 0 && (
        <Table3 orders={table3Orders} onRemove={props.onDelete} />
      )}
      {props.orders.length === 0 && <h3><i>No Orders Placed Yet</i></h3>}
    </div>
  );
};

export default TableBill;