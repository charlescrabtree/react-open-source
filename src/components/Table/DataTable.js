import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import datalist from '../../MOCK_DATA.json';

// const dataList = [
//   { id: 1, name: 'Terri-jo Frigout', email: 'tfrigout0@imgur.com', catchphrase: 'maximized leverage' },
//   { id: 2, name: 'b', email: 'b@email.com', avartar: '...' },
//   { id: 3, name: 'c', email: 'c@email.com', avartar: '...' }
// ];

export const DataTable = () => (
  <Table data={datalist} className="table">
    <Column width={100} sortable fixed resizable className="thead">
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="id" />
    </Column>

    <Column width={100} sortable resizable className="tbody">
      <HeaderCell>Name</HeaderCell>
      <Cell dataKey="name" />
    </Column>

    <Column width={300} sortable resizable className="tbody">
      <HeaderCell>Catchphrase</HeaderCell>
      <Cell dataKey="catch_phrase" />
    </Column>

    <Column width={100} sortable resizable className="tfoot">
      <HeaderCell>Email</HeaderCell>
      <Cell>
        {(rowData) => {
          return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
        }}
      </Cell>
    </Column>
  </Table>
);