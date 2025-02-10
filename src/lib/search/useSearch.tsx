import { ChangeEventHandler, useState } from "react";
import { useDebounce } from "../debounce/useDebounce";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setSearchTerm(value);
  };

  return { handleSearchChange, searchTerm, debouncedSearchTerm };
};
