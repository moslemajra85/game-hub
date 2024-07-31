 import genres from "../data/genres";

//const useGenres = () => useData<Genre>('genres');

// instead of calling the useData hook to send request to the server
// we will return a static data containing all genres

const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres;
