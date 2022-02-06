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
    // .toBeNull() does hit only null.
    expect(n).toBeNull();
    // .toBeDefined() does hit only undefined. 
    expect(n).toBeDefined();
    // .toBeUndefined() does opposite of .toBeDefined().
    expect(n).not.toBeUndefined();
    // .toBeTruthy() does hit "if" statement is true.
    expect(n).not.toBeTruthy();
    // .toBeFalsy() does hit "if" statement is false.
    expect(n).toBeFalsy();
  });
});