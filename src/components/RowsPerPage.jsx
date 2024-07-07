const Pagination = ({
  rowCount,
  setRowsPerPage
}) => {
  const pageSizeList = [10, 20, 50, 100];
  return <div className="col-sm">
    <div className="d-flex align-items-center gap-2">
      <div className="d-flex align-items-center gap-2">
        <label htmlFor="page-size-select">Show: </label>
        <select name="page-size-select" id="page-size-select" className="form-select w-auto" value={rowCount} onChange={(setRowsPerPage)}>
          {pageSizeList.map(pageSize => <option key={pageSize} value={pageSize}>
            {pageSize}
          </option>)}
        </select>
      </div>
    </div>
  </div>;
};
export default Pagination;