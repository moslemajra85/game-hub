import { HStack, Icon, Text } from '@chakra-ui/react';
import { Platform } from '../interfaces/games';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaApple,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: {
    [key: string]: IconType
  } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
    web: BsGlobe,
  };

  return (
    <HStack spacing="6px" marginY={1}>
      {platforms.map((platform) => (
       <Icon as={iconMap[platform.slug]} color="gray.500"/>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
