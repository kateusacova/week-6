const searchCandies = require("./searchCandies");

describe('searchCandies', () => {
  it('returns filtered array', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
  it('returns filtered array', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });
  it('returns filtered array', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });
  it('returns filtered array', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
  it('returns filtered array ignoring lowercase search str', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
});