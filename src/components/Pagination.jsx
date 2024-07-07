import clsx from 'clsx';
import { useEffect, useState } from 'react';
import IconifyIcon from './wrappers/IconifyIcon';

const Pagination = ({
  currentPage,
  totalPages,
  setCurPage,
}) => {
  const [visiblePages, setVisiblePages] = useState([]);
  useEffect(() => {
    const visiblePagesBefore = [];
    const visiblePagesAfter = [];
    for (let i = 1; i < 5; i++) {
      currentPage - i > 0 && visiblePagesBefore.push(currentPage - i)
      currentPage + i <= totalPages && visiblePagesAfter.push(currentPage + i)
    }
    visiblePagesBefore.sort((a, b) => a - b)
    visiblePagesAfter.sort((a, b) => a - b)
    setVisiblePages([...visiblePagesBefore, currentPage, ...visiblePagesAfter])
  }, [totalPages, currentPage]);
  const previousPageAvailable = () => currentPage <= 1
  const nextPageAvailable = () => currentPage >= totalPages
  return <ul className="pagination pagination-rounded m-0">
    <li className="page-item">
      <button onClick={setCurPage(currentPage - 1)} disabled={previousPageAvailable()} className={clsx('page-link', {
        disabled: previousPageAvailable()
      })}>
        <IconifyIcon icon="bx:left-arrow-alt" height={18} width={18} />
      </button>
    </li>
    {visiblePages.map((page, idx) => <li key={idx} className={clsx('page-item', {
      active: page === currentPage
    })}>
      <button onClick={setCurPage(page)} className="page-link">
        {page}
      </button>
    </li>)}
    <li className="page-item">
      <button onClick={setCurPage(currentPage + 1)} disabled={nextPageAvailable()} className={clsx('page-link', {
        disabled: nextPageAvailable()
      })}>
        <IconifyIcon icon="bx:right-arrow-alt" height={18} width={18} />
      </button>
    </li>
  </ul>
};
export default Pagination;