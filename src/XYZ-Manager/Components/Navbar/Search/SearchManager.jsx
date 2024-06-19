import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Search({value, handleTextChange}) {
  return (
    <div className="search-manager">
          <SearchOutlinedIcon className="searchIcon-manager" />
          <input value={value} onChange={handleTextChange} type="text" placeholder='Search' />
    </div>
  )
}

export default Search