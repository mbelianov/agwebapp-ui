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
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  TableSelectRow,
  TableSelectAll,
  Button,
  OverflowMenu
} from 'carbon-components-react';

import {
  Edit16,
  Edit32,
} from '@carbon/icons-react';



const RepoTable = ({ rows, headers }) => {

  const getRowDescription = (rowId) => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.description : '';
  };

  const onInputChange = () => {
    alert("this actualy works");
  }

  return (
    <DataTable 
      isSortable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        getToolbarProps,
        onInputChange,
        getSelectionProps,
      }) => (
        <TableContainer
          title="Carbon Repositories"
          description="A collection of public Carbon repositories.">
          <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
            <TableToolbarContent>
              <TableToolbarSearch persistent onChange={onInputChange} />
              <TableToolbarMenu>
                <TableToolbarAction onClick={()=>{}}>
                  Изтриване
                </TableToolbarAction>
              </TableToolbarMenu>
              <Button >Нов Пациент</Button>
            </TableToolbarContent>
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
                <TableExpandHeader />
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    <TableSelectRow {...getSelectionProps({ row })} />
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                    <TableCell>
                      <Button
                        hasIconOnly
                        renderIcon={Edit16}
                        tooltipAlignment="center"
                        tooltipPosition="left"
                        iconDescription="Редакция"
                        kind='ghost'
                      />
                    </TableCell>
                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 3}>
                    <p>{getRowDescription(row.id)}</p>

                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default RepoTable;