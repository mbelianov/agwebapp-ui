// https://github.com/carbon-design-system/carbon/issues/6317

import React, { useState } from 'react';
import {
  DataTable,
  TableSelectRow,
  TableToolbar,
  TableContainer,
  TableBatchAction,
  TableBatchActions,
  TableToolbarContent,
  DataTableSkeleton,
  TableToolbarSearch,
  TableToolbarMenu,
  TableToolbarAction,
  TableSelectAll,
  TableExpandRow,
  TableExpandedRow,
  TableExpandHeader,
  Table,
  Button,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Pagination
} from 'carbon-components-react';
import Trash20 from '@carbon/icons-react/es/trash-can/20';
import Edit20 from '@carbon/icons-react/es/edit/20';
import PropTypes from 'prop-types';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */

function TableCases({ tableTitle, tableDescription, tablePath, tableHeader }) {

  TableCases.propTypes = {
    tableTitle: PropTypes.string.isRequired,
    tableDescription: PropTypes.string.isRequired,
    tablePath: PropTypes.string.isRequired,
    tableHeader: PropTypes.array.isRequired,
  };

  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(tableTitle);
  const [description, setDescription] = useState(tableDescription);

  const [headerData, setHeaderData] = useState(tableHeader);
  const [rowData, setRowData] = useState([]);

  const [paginate, setPaginate] = useState({
    current_page: null,
    first_page_url: null,
    from: null,
    last_page: null,
    last_page_url: null,
    next_page_url: null,
    path: null,
    per_page: null,
    prev_page_url: null,
    to: null,
    total: null,
  });

  function closeAllExpanded(event) {
    alert()
    console.log(event)
  }

  function onRowExpand(event) {
    if (event.target.nodeName !== 'svg') return;
   // your code for onExpand functionality here
}  

  function updateDataEvent(event) {
    setTitle('Loading new data...')
    axios
      .get('/case/' + tablePath + '/get?page=' + event.page + '&pageSize=' + event.pageSize)
      .then(success => {
        setTitle(tableTitle)
        setRowData(success.data.data);
      })
      .catch(error => {
        setLoading(false);
        setTitle(error.response.status + ' | ' + error.response.statusText)
        console.log(onerror)
      })
  }

  function searchDataEvent(event) {
    if (event.target.value) {
      setTitle('Search data...')
      axios
        .get('/case/' + tablePath + '/get?search=' + event.target.value)
        .then(success => {
          setRowData(success.data.data);
          setTitle(tableTitle)
        })
        .catch(error => {
          setLoading(false);
          setTitle(error.response.status + ' | ' + error.response.statusText)
          console.log(onerror)
        })
    } else getData();
  }

  function getData() {
    axios
      .get('/case/' + tablePath + '/get')
      .then(success => {
        setRowData(success.data.data);

        setPaginate({
          current_page: success.data.current_page,
          first_page_url: success.data.first_page_url,
          from: success.data.from,
          last_page: success.data.last_page,
          last_page_url: success.data.last_page_url,
          next_page_url: success.data.next_page_url,
          path: success.data.path,
          per_page: success.data.per_page,
          prev_page_url: success.data.prev_page_url,
          to: success.data.to,
          total: success.data.total,
        });

        setTimeout(() => setLoading(false), 1800)
      })
      .catch(onerror => {
        setLoading(false);
        console.log(onerror)
      })
  }

  window.addEventListener('DOMContentLoaded', getData)

  /**
   * Return View */
  return (
    loading ?
      <DataTableSkeleton rowCount={10} showHeader={true} showToolbar={true} columnCount={headerData.length} /> :
      <DataTable isSortable
        pagination
        rows={rowData}
        headers={headerData}
        render={({
          rows,
          headers,
          getHeaderProps,
          getSelectionProps,
          getBatchActionProps,
          getRowProps
        }) => (
          <TableContainer
            title={title}
            description={description}>
            <TableToolbar>
              <TableBatchActions {...getBatchActionProps()}>
                <TableBatchAction
                  tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                  renderIcon={Trash20}
                  onClick={() => console.log('clicked')}>
                  Delete
                                       </TableBatchAction>
                <TableBatchAction
                  tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                  renderIcon={Trash20}
                  onClick={() => console.log('clicked')}>
                  Download
                                       </TableBatchAction>
              </TableBatchActions>
              <TableToolbarContent>
                <TableToolbarSearch
                  tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                  onChange={searchDataEvent}
                />
                <TableToolbarMenu
                  tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}>
                  <TableToolbarAction primaryFocus onClick={() => alert('Alert 1')}>
                    Go to settings
                                           </TableToolbarAction>
                </TableToolbarMenu>
                <Button
                  tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                  onClick={() => window.location.href = '/case/create'}
                  size="small"
                  renderIcon={Edit20}
                  kind="primary">
                  Create Case
                                       </Button>
              </TableToolbarContent>
            </TableToolbar>
            <Table>
              <TableHead>
                <TableRow>
                  <TableExpandHeader />
                  <TableSelectAll {...getSelectionProps()} />
                  {headers.map(header => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <React.Fragment key={row.id}>
                    <TableExpandRow
                      onClick={onRowExpand}  // if onExpand handler on next line does not work, use this approach
                      onExpand={closeAllExpanded} {...getRowProps({ row })}
                      // onExpand={(event) => {console.log("onExpand row", row.id);}}
                      // onClick={(event) => {console.log("onClick row", row.id);}}
                      >
                      <TableSelectRow {...getSelectionProps({ row })} />
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableExpandRow>
                  
                    <TableExpandedRow colSpan={headers.length + 3}>
                      {rowData[row.id - 1].replies[0].content}
                    </TableExpandedRow>
                  </React.Fragment>
                ))}
              </TableBody>
            </Table>
            <Pagination
              backwardText="Previous page"
              disabled={false}
              forwardText="Next page"
              isLastPage={false}
              // itemRangeText={function noRefCheck() {
              // }}
              // itemText={() => paginate.total + " total rows"}
              itemsPerPageText="Items per page:"
              onChange={updateDataEvent}
              page={1}
              // pageInputDisabled
              pageNumberText="Page Number"
              // pageRangeText={() => "1 of 15000"}
              pageSize={10}
              pageSizes={[
                10,
                50,
                250,
                500
              ]}
              // pageText={function noRefCheck() {
              //     return 150
              // }}
              pagesUnknown={false}
              totalItems={paginate.total}
            />
          </TableContainer>)}
      />
  );
}

export default TableCases;