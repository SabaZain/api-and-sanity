import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e:any) => {
    e.preventDefault();
    if (searchTerm) {
    window.location.href = `/Products?search=${searchTerm}`;
}
  };
  return (
    <form onSubmit={handleSearch} className="flex items-center border border-slate-400">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
        className="outline-none flex-1 pl-1"
      />
      <button type="submit" className="bg-main text-[#F1F1F1]">
        <IoIosSearch size={30} />
      </button>
    </form>
  );
}

export default SearchComponent;