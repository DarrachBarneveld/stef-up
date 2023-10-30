import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

interface SearchBarProps {}

const SearchBar: FunctionComponent<SearchBarProps> = () => {
  return (
    <div className="relative mx-4 lg:mx-0">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FontAwesomeIcon icon={faSearch} />
      </span>
      <input
        className="form-input w-32 rounded-md p-2 pl-10 pr-4 focus:border-indigo-600 sm:w-64"
        type="text"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
