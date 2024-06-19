import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search() {
  return (
    <div className="search-admin">
          <SearchOutlinedIcon className="searchIcon-admin" />
          <input type="text" placeholder='Search' />
    </div>
  )
}

export default Search
