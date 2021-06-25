var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad name'],
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    albumTitle: 'ABBA Gold',
  },
};

function updateRecords(records, id, prop, value) {
  // one

  if (prop !== 'tracks' && prop !== '') {
    records[id][prop] = value;
  }

  // two
  else if (prop === 'tracks' && records[id][prop] === undefined) {
    records[id][prop] = [value];

    // tree
  } else if (prop === 'tracks' && records[id][prop] !== undefined) {
    records[id][prop].push(value);
  }

  // four
  else if (value === '') {
    delete records[id][prop];
  }
  return records;
  // end
}

// test
// updateRecords(recordCollection, 5439, 'artist', 'test');
// updateRecords(recordCollection, 5439, 'tracks', 'Atest');
// updateRecords(recordCollection, 2468, 'tracks', 'test');
// updateRecords(recordCollection, 2468, 'artist', '');
