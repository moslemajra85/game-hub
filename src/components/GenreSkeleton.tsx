import {  Skeleton, Stack } from '@chakra-ui/react';

const GenreSkeleton = () => {
  const array: number[] = new Array(15).fill(1);
  const renderedSkeleton = array.map(() => <Skeleton mb="3px" height="15px" />);
  return <Stack>{renderedSkeleton}</Stack>;
};

export default GenreSkeleton;
