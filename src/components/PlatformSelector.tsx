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
import { Platform } from '../interfaces/games';

interface Props {
  onPlatformSelected: (platform: Platform) => void;
  selectedPlatform: Platform;
}

const PlatformSelector = ({ onPlatformSelected, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDownSharp />}>
        {isLoading ? (
          <Spinner />
        ) : selectedPlatform ? (
          selectedPlatform.name
        ) : (
          'Platforms'
        )}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            value="Atari"
            onClick={() => onPlatformSelected(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
