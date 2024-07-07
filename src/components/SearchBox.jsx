import IconifyIcon from '@/components/wrappers/IconifyIcon';
const SearchBox = ({
    value,
    setValue
}) => {
    return (
        <div className="search-bar">
            <span>
                <IconifyIcon icon="bx:search-alt" className="mb-1" />
            </span>
            <input type="search" className="form-control" id="search" placeholder="Search..." value={value} onChange={setValue} />
        </div>
    )
}

export default SearchBox