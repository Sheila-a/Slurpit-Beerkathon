import React from "react";
import { Search } from "@mui/icons-material";

const Searchh = () => {
  // const [searchValue, setSearchValue] = useState("");

  // const handleSearch = (event) => {
  //   setSearchValue(event.target.value);
  // };
  return (
    <div>
      <span>
        <Search />
      </span>
      <input
        type="search"
        placeholder="Search..."
        // value={searchValue || ""}
        // onChange={handleSearch}
      />
    </div>
  );
};

export default Searchh;
