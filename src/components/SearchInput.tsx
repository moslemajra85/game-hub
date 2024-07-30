import { useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({onSearch}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (inputRef.current) {
            onSearch(inputRef.current.value)
         }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <MdSearch color="red" size={30} />
        </InputLeftElement>
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
