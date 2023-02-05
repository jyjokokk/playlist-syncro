import { PlaylistRepository } from './playlist.repository';

describe('Playlist', () => {
  let instance;

  let localDbAPI: any = {};

  beforeEach(() => {
    instance = new PlaylistRepository(localDbAPI);
  });

  it('instance should be an instanceof Playlist', () => {
    expect(instance instanceof PlaylistRepository).toBeTruthy();
  });
});
