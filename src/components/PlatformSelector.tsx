import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react';
import { IoChevronDownSharp } from 'react-icons/io5';

import usePlatforms from '../hooks/usePlatforms';

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDownSharp />}>
        {isLoading ? <Spinner /> : 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem key={platform.id}>{platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
