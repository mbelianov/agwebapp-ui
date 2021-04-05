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
} from 'carbon-components-react';
import {ExamInfoCard} from '../../components/InfoCards'


const ExamTable = ({ rows, headers}) => {

  const getExamDetails = (row) => {
    let examdata = rows.find((r) => {return (r.id === row.id)});

    return (row.isExpanded ? <ExamInfoCard examdata={examdata}/> : <div></div>);
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

  return (
    <DataTable
      rows={rows}
      headers={headers}
      render={({
        rows, headers,
        getHeaderProps, getRowProps, getTableProps, getToolbarProps, onInputChange,
        getSelectionProps,
      }) => (
        <TableContainer >
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
                  <TableExpandRow 
                    {...getRowProps({ row })}
                    //onExpand={(event) => {console.log("onExpand row", row.id);}}
                    //onClick={(event) => {console.log("onClick row", row.id);}}
                    onClick = {(e)=>handleOnClick(row, e)}
                  >                
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 1}>
                    
                    {getExamDetails(row)}
                    
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