import { IconButton, Tooltip } from "@mui/material";
import { useState, ChangeEvent, FormEvent } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Handle form submission if needed
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex items-center justify-center w-[20rem]">
      <form
        className="w-full text-inherit flex items-center justify-between"
        onSubmit={handleSubmit} // Added onSubmit handler to the form element
      >
        <div className="flex h-[3rem] flex-1 items-center justify-between rounded-3xl pl-2 bg-gray-300 text-gray-800">
          <div className="w-full flex justify-between items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent w-full min-h-full focus:outline-none border-none"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
          {searchTerm && (
            <Tooltip title="Clear search">
              <IconButton
                className="focus:outline-none text-zinc-600 dark:text-slate-200"
                onClick={handleClearSearch}
              >
                <AiOutlineClose className="mx-1 p-1" />
              </IconButton>
            </Tooltip>
          )}
          <Tooltip title="Search">
            <IconButton
              className="text-zinc-600 dark:text-slate-200 focus:outline-none h-full px-2 rounded-r-3xl flex items-center justify-end"
              type="submit" // Added type="submit" to trigger form submission
            >
              <AiOutlineSearch className="text-2xl" />
            </IconButton>
          </Tooltip>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
