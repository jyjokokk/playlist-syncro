import {
  shallowCopyObject,
  cloneObject,
  jsonDeepCopyObject,
  pickProperties,
  pickPropertiesDeep,
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
const objNumIndex = { 1: 'lol', 2: 'kek', 3: [{}, {}] };
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
    expect(shallowCopyObject).toBeDefined();
  });

  it('returns a shallow copy', () => {
    const r = shallowCopyObject(obj1);
    expect(r).toEqual(obj1Shallow);
  });
});

describe('clone', () => {
  it('should expose a function', () => {
    expect(cloneObject).toBeDefined();
  });
  it('returns a deep copy', () => {
    const r = cloneObject(obj2);
    expect(JSON.stringify(r)).toEqual(JSON.stringify(obj2));
    expect(r).not.toBe(obj2);
  });
});

describe('cloneJson', () => {
  it('should expose a function', () => {
    expect(jsonDeepCopyObject).toBeDefined();
  });

  it('cloneJson should return expected output', () => {
    const r = cloneObject(obj2);
    expect(JSON.stringify(r)).toEqual(JSON.stringify(obj2));
    expect(r).not.toBe(obj2);
  });
});

describe('pickProperties', () => {
  it('should expose a function', () => {
    expect(pickProperties).toBeDefined();
  });

  it('returns an shallow object copy with only the given properties', () => {
    const r = pickProperties(obj, 'name');
    expect(r).toEqual({ name: 'Name One' });
    const r1 = pickProperties({ 1: 'lol', 2: 'kek', 3: [{}, {}] }, 3, 1);
    expect(r1).toEqual({ 1: 'lol', 3: [{}, {}] });
    const r2 = pickProperties(obj2, 'name2', 'spots');
    expect(r2).toEqual({ name2, spots });
  });
});

describe('pickPropertiesDeep', () => {
  it('should expose a function', () => {
    expect(pickPropertiesDeep).toBeDefined();
  });

  it('returns a deep object copy with only the given properties', () => {
    const r = pickPropertiesDeep(obj, 'name');
    expect(r).toEqual({ name: 'Name One' });
    const r1 = pickPropertiesDeep(objNumIndex, 3, 1);
    expect(r1).toEqual({ 1: 'lol', 3: [{}, {}] });
    const r2 = pickProperties(obj2, 'name2', 'spots');
    expect(r2).toEqual({ name2, spots });
  });
});
