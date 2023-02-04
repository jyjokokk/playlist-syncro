import {
  shallowCopy,
  clone,
  deepCopyJson,
  pickProperties,
} from './objects.util';

const obj = {
  id: 1,
  name: 'Name One',
};
const category = {
  genres: ['action', 'fantasy'],
};
const obj1 = {
  ...obj,
  category,
};

const obj1Shallow = { ...obj1 };

const name2 = 'SecondOne';
const spots = [1, 2, 3];

const obj2 = {
  id: 2,
  name2,
  spots,
  category: {
    genres: ['action', 'fantasy'],
    author: {
      firstName: 'Terry',
      lastName: 'Pratchett',
    },
  },
};

describe('sClone', () => {
  it('should expose a function', () => {
    expect(shallowCopy).toBeDefined();
  });

  it('returns a shallow copy', () => {
    const r = shallowCopy(obj1);
    expect(r).toEqual(obj1Shallow);
  });
});

describe('clone', () => {
  it('should expose a function', () => {
    expect(clone).toBeDefined();
  });
  it('returns a deep copy', () => {
    const r = clone(obj2);
    expect(JSON.stringify(r)).toEqual(JSON.stringify(obj2));
    expect(r).not.toBe(obj2);
  });
});

describe('cloneJson', () => {
  it('should expose a function', () => {
    expect(deepCopyJson).toBeDefined();
  });

  it('cloneJson should return expected output', () => {
    const r = clone(obj2);
    expect(JSON.stringify(r)).toEqual(JSON.stringify(obj2));
    expect(r).not.toBe(obj2);
  });
});

describe('pick', () => {
  it('should expose a function', () => {
    expect(pickProperties).toBeDefined();
  });

  it('returns a new object with only the given properties', () => {
    const r = pickProperties(obj, 'name');
    expect(r).toEqual({ name: 'Name One' });
    const r2 = pickProperties(obj2, 'name2', 'spots');
    expect(r2).toEqual({ name2, spots });
  });
});
