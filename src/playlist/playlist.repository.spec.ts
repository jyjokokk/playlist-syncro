import { Playlist } from './playlist.repository';

describe('Playlist', () => {
  let instance;

  beforeEach(() => {
    instance = new Playlist();
  });

  it('instance should be an instanceof Playlist', () => {
    expect(instance instanceof Playlist).toBeTruthy();
  });
});
