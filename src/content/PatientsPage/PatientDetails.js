import React, { useEffect, useState } from 'react';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';
import { Search, Link, DataTableSkeleton, Pagination } from 'carbon-components-react';
import ExamTable from './ExamTable';

const exam_table_headers = [
  { key: "id", header: "Номер" },
  { key: 'title', header: 'Преглед' },
  { key: 'timestamp', header: 'Дата на създаване' },

];

const getRowItems = (rows) =>
  rows.map((row) => ({
    ...row,
    id: row._id,
    timestamp: new Date(row.timestamp).toLocaleDateString(),
  }));

const PatientDetails = (patiendId) => {
  var setAxiosStateProps;
  var bookmarks = [null];
  var totalItems = 0;
  const pageSize = 5;

  const AxiosRequest = () => {
    const [stateProps, setStateProps] = useState(
      {
        searchParams: {
          search: '',
          bookmark: null,
          pagesize: pageSize
        },
        currentPage: 1
      });

    setAxiosStateProps = setStateProps;

    return (
      <div>
        <Get
          url={process.env.REACT_APP_BACK_END_URL + process.env.REACT_APP_EXAM_FIND_API}
          params={stateProps.searchParams}>
          {(error, response, isLoading, makeRequest, axios) => {
            if(error) {
              return (
                <div>
                  <p>Възникна грешка: {error.message}</p>
                  <p>Опитайте отново!</p>
                </div>)
            }
            else if(isLoading) {
              return (
                <DataTableSkeleton
                  columnCount={exam_table_headers.length }
                  rowCount={pageSize}
                  headers={exam_table_headers}
                />  
              )            
            }
            else if (response !== null){
              const rows = getRowItems(response.data.docs);
              if ( ((stateProps.currentPage-1)*pageSize + response.data.count) > totalItems )  //this is new page that has not been presented so far
              {
                totalItems += response.data.count;
                bookmarks = [...bookmarks, response.data.bookmark];
              }
              return(
                <>
                  <ExamTable
                    headers={exam_table_headers}
                    rows={rows}
                  />
                  <Pagination
                    //pagesUnknown
                    totalItems={totalItems+(response.data.count === response.data.requested ? 1 : 0)}
                    page={stateProps.currentPage}
                    backwardText="Назад"
                    forwardText="Напред"
                    itemsPerPageText="Редове на страница"
                    pageNumberText = "Номер на страница"
                    pageText = {page => `Страница ${ page }`}
                    pageRangeText = {(current, total) => `от ${ total } ${ total === 1 ? 'страница' : 'страници' }` }
                    itemText = {(min, max) => `Позиции: ${ min }–${ max }`}
                    pageSizes = {[pageSize]}
                    onChange={({ page, pageSize }) => {
                      setStateProps(
                        {
                          searchParams:{
                            search: stateProps.searchParams.search,
                            bookmark: bookmarks[page-1],
                            pagesize: stateProps.searchParams.pagesize
                          },
                          currentPage: page
                        }
                      )
                     }}
                  />
                </>
              )              
            }
            return (<div>Default message before request is made.</div>);            
          }}


        </Get>
      </div>
    );
  }

  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter">
      <div className="bx--row">
        <div className="bx--col-lg-16">
          <AxiosRequest />
        </div>
      </div>
    </div>
  );

};

export default PatientDetails;