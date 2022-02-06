describe('General matcher test sample', () => {
  test('two plus two is four', () => {
    // .toBe() is '==='
    expect(2 + 2).toBe(4);
  });

  test('object assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    // .toEqual() does recursive check field object or array.
    expect(data).toEqual({one: 1, two: 2});
  });

  test('adding positive numbers is not zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        // The test have to clear for all a + b execute.
        expect(a + b).not.toBe(0);
      }
    }
  });
});

describe('bool and like that value', () => {
  test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
});