import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenresList from './components/GenresList';
import { useState } from 'react';
import { Genre } from './interfaces/genres';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Platform } from './interfaces/games';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | null;
  searchText: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onPlatformSelected = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };

  const OnSort = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  const onSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '230px 1fr',
      }}
    >
      <GridItem area="nav">
        <Navbar onSearch={onSearch} />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onPlatformSelected={onPlatformSelected}
            />
            <SortSelector selectedSort={gameQuery.sortOrder} onSort={OnSort} />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
        <Box bg="brand.900">Welcome</Box>
      </GridItem>
    </Grid>
  );
}

export default App;
