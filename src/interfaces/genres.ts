export interface Genre {
  id: number;
  name: string;
}
export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
