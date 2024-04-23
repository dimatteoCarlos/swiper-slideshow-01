//rickandmortyapi data type

export interface DataRickAndMortyApiType {
  info: Info;
  results?: ResultsType[] | null;
}
export interface Info {
  count: number;
  pages: number;
  next?: string;
  prev?: null;
}
export interface ResultsType {
  id: number;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin: {
    name: string;
    url: string;
  };
  location?: OriginOrLocation;
  image: string;
  episode?: string[] | null;
  url: string;
  created?: string;
}
export interface OriginOrLocation {
  name: string;
  url: string;
}
