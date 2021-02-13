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
  Button,
} from 'carbon-components-react';

import {
  Edit16,
  Edit32,
} from '@carbon/icons-react';
import ExamTable from './ExamTable';
import PatientDetails from './PatientDetails';


const PatientListTable = ({ rows, headers }) => {

  const getPatientDetails = (isRowExpanded, patientId) => {
    //const row = rows.find(({ id }) => id === rowId);
    /*
    let itemList=items.map((item,index)=>{
      return <li key={index}>{item}</li>
      })
    */
    let items = [1,2];

    let itemList = items.map((item, index) => {
      return <li key={index}>{item}</li>
    })
    
    let rows =[ {id:"0", title:"Преглед първи триместър", timestamp:new Date().toLocaleDateString()},
                {id:"1", title:"Преглед първи триместър", timestamp:new Date().toLocaleDateString()}]



    if (isRowExpanded)
      return (
        //<div><ExamTable rows={rows} /></div>
        <div><PatientDetails patientId={patientId}/> </div>
      )

  };

  const handleOnClick = (row, event) => {
    //event.preventDefault();  
    if (event.target.nodeName !== 'svg') 
    { 
      console.log("Just click, no expand");
      return;
    }

    if (!row.isExpanded){
      console.log("we need to epxpad this raw");
    }
  }

  const onInputChange = () => {
    alert("this actualy works");
    let items = [1, 2];
    items.forEach((i)=> {
      i++;
    })
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
          title="Списък с пациенти"
          description="Списък с пациенти според критерия за търсене"
          locale="bg">
          <TableToolbar {...getToolbarProps()} aria-label="data table toolbar">
            <TableToolbarContent>
              <TableToolbarSearch onChange={onInputChange} />
              <TableToolbarMenu>
                <TableToolbarAction onClick={() => { }}>
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
                  <TableExpandRow {...getRowProps({ row })}
                    onClick = {(event)=>handleOnClick(row, event)}
                  >
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
                    <div>{getPatientDetails(row.isExpanded, row.id)}</div>

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

export default PatientListTable;