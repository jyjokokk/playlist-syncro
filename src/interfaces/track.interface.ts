import { Artist } from './artist.interface';

export interface Track {
  id: string;
  name: string;
  artist: Artist;
  featuring?: Artist[];
  length?: number;
}
