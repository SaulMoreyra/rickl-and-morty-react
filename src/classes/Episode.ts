import {Character} from './Character';
export interface Episode {
   id: string,
  name: string,
  air_date: string,
  episode: string,
  characters: Character[]
  created: string
}