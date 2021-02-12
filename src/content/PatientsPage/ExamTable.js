import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
  TableSelectRow,
} from 'carbon-components-react';

const exam_table_headers = [
  { key: "id", header: "Номер"},
  { key: 'title', header: 'Преглед' },
  { key: 'timestamp', header: 'Дата на създаване' },
  
];

function ExamTable({ rows }) {

  const getExamDetails = (examId) => {
    return (<div>details</div>);
  };

  const handleOnClick = (e) => {
    console.log(e);
  }

  return (
    <DataTable
      
      rows={rows}
      headers={exam_table_headers}
      render={({
        rows, headers,
        getHeaderProps, getRowProps, getTableProps, getToolbarProps, onInputChange,
        getSelectionProps,
      }) => (
        <TableContainer title="Регистрирани прегледи">
          <Table {...getTableProps()} size ='compact' >
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header, isSortable: false })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row, onClick:handleOnClick })}>
                   
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}





                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <div>demo</div>
                  </TableExpandedRow>
                </React.Fragment>
                
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )} />
  );
}

export default ExamTable;