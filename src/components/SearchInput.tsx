import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdSearch } from "react-icons/md";

const SearchInput = () => {
  return (
    <InputGroup>
     <InputLeftElement pointerEvents='none'>
      <MdSearch color='red' size={30}/>
    </InputLeftElement>
    <Input borderRadius={20} placeholder="Search Games..." variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
