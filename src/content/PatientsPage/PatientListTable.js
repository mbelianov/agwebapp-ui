import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  DataTable,
  TableContainer, Table, TableHead, TableRow, TableExpandHeader,
  TableHeader, TableBody, TableExpandRow, TableCell, TableExpandedRow,
  TableToolbar, TableToolbarAction, TableToolbarContent, TableToolbarSearch,
  TableToolbarMenu, TableSelectRow, Button, OverflowMenu, OverflowMenuItem,
  Modal, ComposedModal, ModalBody, ModalHeader, TextInput, Select, SelectItem
} from 'carbon-components-react';

import PatientDetails from './PatientDetails';


const PatientListTable = ({ rows, headers }) => {



  const getPatientDetails = (isRowExpanded, row) => {
    //const row = rows.find(({ id }) => id === rowId);
    /*
    let itemList=items.map((item,index)=>{
      return <li key={index}>{item}</li>
      })
    */

    if (isRowExpanded) {
      const egnCell = row.cells.find(cell => cell.info.header === "egn");
      return (
        <div><PatientDetails patientEGN={egnCell.value} /> </div>
      )
    }

  };

  const handleRowExpandClick = (row, event) => {
    //event.preventDefault();  
    if (event.target.nodeName !== 'svg') {
      console.log("Just click, no expand");
      return;
    }

    if (!row.isExpanded) {
      console.log("we need to epxpad this raw");
    }
  }

  const handleRowDelete = (row) => {
    setPatientDeleteModalOpen(true)
    setCurrentRow(row);

  }

  const handleRowEdit = (row) => {
    setPatientEditModalOpen(true)
    setCurrentRow(row);
  }

  const handleNewExam = (row) => {

  }

  const dataTable = () => {
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
                      onClick={(event) => handleRowExpandClick(row, event)}>
                      <TableSelectRow {...getSelectionProps({ row })} />
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                      <TableCell>
                        <OverflowMenu flipped>
                          <OverflowMenuItem itemText="Редакция" onClick={() => handleRowEdit(row)} />
                          <OverflowMenuItem itemText="Нов преглед" onClick={() => handleNewExam(row)} />
                          <OverflowMenuItem
                            onClick={() => handleRowDelete(row)}
                            requireTitle hasDivider isDelete
                            itemText="Изтриване"
                          />

                        </OverflowMenu>
                      </TableCell>
                    </TableExpandRow>
                    <TableExpandedRow colSpan={headers.length + 3}>
                      <div> {getPatientDetails(row.isExpanded, row)}</div>

                    </TableExpandedRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      />
    );
  }

  const [patientEditModalOpen, setPatientEditModalOpen] = useState(false);
  const [patientDeleteModalOpen, setPatientDeleteModalOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  const patientEditModal = () => {
    return (
      <Modal
        preventCloseOnClickOutside
        shouldSubmitOnEnter
        modalHeading="Редакция данни за пациент"
        //size="lg" //"xs","sm","lg"
        open={patientEditModalOpen}
        onRequestClose={() => setPatientEditModalOpen(false)}
        onRequestSubmit={() => { console.log("submited"); setPatientEditModalOpen(false) }}
        primaryButtonText="Запиши"
        secondaryButtonText="Отказ">
        <ModalBody hasForm>
          <TextInput
            data-modal-primary-focus
            id="text-input-1"
            labelText="Domain name"
            placeholder="e.g. github.com"
            style={{ marginBottom: '1rem' }}
          />
          <Select id="select-1" defaultValue="us-south" labelText="Region">
            <SelectItem value="us-south" text="US South" />
            <SelectItem value="us-east" text="US East" />
          </Select>
          <p className="bx--modal-content__text bx--modal-content__regular-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            cursus fermentum risus, sit amet fringilla nunc pellentesque quis. Duis
            quis odio ultrices, cursus lacus ac, posuere felis. Donec dignissim libero
            in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
            ultrices lorem condimentum, nec ullamcorper felis porttitor.
        </p>
        </ModalBody>
      </Modal>
    )
  }

  const patientDeleteModal = () => {
    const deletingPatient = () => {
      console.log("Deleting: " + JSON.stringify(currentRow)); 
      setPatientDeleteModalOpen(false)
    }
    return (
      <Modal
        danger
        modalHeading="Вниманиe! Изтриване на пациент"
        //size="lg" //"xs","sm","lg"
        open={patientDeleteModalOpen}
        onRequestClose={() => setPatientDeleteModalOpen(false)}
        onRequestSubmit={() => { deletingPatient() }}
        primaryButtonText="ДА"
        secondaryButtonText="НЕ">
        <ModalBody>
          <p>
            Моля потвърдете изтриване на пациент:
          </p>
          <br></br>
          {currentRow === null ? "" :
            (
              currentRow.cells.find(cell => cell.info.header === "firstname").value + ' ' +
              currentRow.cells.find(cell => cell.info.header === "secondname").value + ' ' +
              currentRow.cells.find(cell => cell.info.header === "lastname").value + ' - ' +
              currentRow.cells.find(cell => cell.info.header === "egn").value
            )
          }
        </ModalBody>
      </Modal>
    )
  }

  return (
    <>
      {typeof document === 'undefined' ? null : ReactDOM.createPortal(
        patientEditModal(),
        document.body
      )}
      {typeof document === 'undefined' ? null : ReactDOM.createPortal(
        patientDeleteModal(),
        document.body
      )}
      {dataTable()}
    </>
  );



  //return (dataTable());

};

export default PatientListTable;