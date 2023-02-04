export const artist1 = {
  id: 'artistId1',
  name: 'Artist One',
};

export const artist2 = {
  id: 'artistId2',
  name: 'Second Artist',
};

export const artistList = [artist1, artist2];

export const track1 = {
  id: 'trackId1',
  name: 'First Track a1',
  artist: artist1,
};

export const track2 = { ...track1, id: 'trackId2', name: 'Second Track a1' };
export const track3 = { ...track1, id: 'trackId3', name: 'Third Track a1' };
export const track4 = { ...track1, id: 'trackId4', artist: artist2 };

export const track5 = {
  ...track1,
  id: 'trackId5',
  artist: artist2,
  name: 'Second Track a2',
};
export const track6 = {
  ...track1,
  id: 'trackId6',
  artist: artist2,
  name: 'Third Track a2',
};
export const track7 = {
  ...track1,
  id: 'trackId7',
  name: 'Featuring Track',
  featuring: artist2,
};

export const allTracks = [
  track1,
  track2,
  track3,
  track4,
  track5,
  track6,
  track7,
];

export const allTracksArtist1 = allTracks.filter((t) => {
  t.artist.id === 'artistId1';
});

export const allTracksArtist2 = allTracks.filter((t) => {
  t.artist.id === 'artistId2';
});

export const playlist1 = {
  id: 'playlistId1',
  name: 'Playlist 1',
  tracks: allTracks,
};

export const playlist2 = {
  id: 'playlistId2',
  name: 'Playlist 1',
  tracks: [track7, track1, track4],
};

export const playlist3 = {
  id: 'playlistId3',
  name: 'Playlist 1',
  tracks: [track6, track2, track5, track3],
};
