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
});