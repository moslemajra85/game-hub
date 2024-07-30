import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { IoChevronDownSharp } from 'react-icons/io5';

interface Props {
  selectedSort: string | null;
  onSort: (sort: string) => void;
}

const SortSelector = ({ selectedSort, onSort }: Props) => {
  const sortCriteria = [
    {
      value: '',
      label: 'Relevance',
    },
    {
      value: '-added',
      label: 'Date added',
    },
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: '-released',
      label: 'Release Date',
    },
    {
      value: 'metacritic',
      label: 'Popularity',
    },
    {
      value: '-rating',
      label: 'Average rating',
    },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDownSharp />}>
        Order By: {selectedSort || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortCriteria.map((criteria, i) => (
          <MenuItem
            value={criteria.value}
            onClick={() => onSort(criteria.value)}
            key={criteria.value}
          >
            {criteria.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
