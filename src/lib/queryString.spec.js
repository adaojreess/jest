import { queryString, parse } from './queryString';
describe('Object to query string', () => {
  it('should crete a valid query string when an object provided', () => {
    const obj = {
      name: 'Adão',
      profession: 'Developer',
    };
    expect(queryString(obj)).toBe('name=Adão&profession=Developer');
  });

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Adão',
      abilities: ['js', 'ts', 'tdd'],
    };
    expect(queryString(obj)).toBe('name=Adão&abilities=js,ts,tdd');
  });

  it('should throw an error when an object is passed as object', () => {
    const obj = {
      name: 'Adão',
      abilities: { first: 'js', second: 'ts' },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string object', () => {
  it('should query string to object', () => {
    const queryString = 'name=Adão&profession=Developer';

    expect(parse(queryString)).toEqual({
      name: 'Adão',
      profession: 'Developer',
    });
  });

  it('should query string of a single key-value pair to object', () => {
    const queryString = 'name=Adão';

    expect(parse(queryString)).toEqual({
      name: 'Adão',
    });
  });

  it('should convert a query string to an object taking care of comma separated value', () => {
    const queryString = 'name=Adão&abilities=js,ts,tdd';
    expect(parse(queryString)).toEqual({
      name: 'Adão',
      abilities: ['js', 'ts', 'tdd'],
    });
  });
});
