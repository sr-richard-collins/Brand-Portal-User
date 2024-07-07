import IconifyIcon from '@/components/wrappers/IconifyIcon';
const SearchBox = () => {
  return <form className="app-search d-none d-md-block me-auto">
      <div className="position-relative">
        <input type="search" className="form-control" placeholder="Search..." autoComplete="off" />
        <IconifyIcon icon="iconamoon:search-duotone" className="search-widget-icon" />
      </div>
    </form>;
};
export default SearchBox;