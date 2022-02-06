describe('General matcher test sample', () => {
  test('two plus two is four', () => {
    // .toBe() is '==='
    expect(2 + 2).toBe(4);
  });

  test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    // .toEqual() does recursive check field object or array.
    expect(data).toEqual({ one: 1, two: 2 });
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
    // .toBeTruthy() does hit 'if' statement is true.
    expect(n).not.toBeTruthy();
    // .toBeFalsy() does hit 'if' statement is false.
    expect(n).toBeFalsy();
  });

  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });
});

describe('number', () => {
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3) does not work as expcted.
    expect(value).toBeCloseTo(0.3);
  });
});

describe('strings', () => {
  test('there is no I in item', () => {
    expect('team').not.toMatch(/I/);
  });

  test('but there is a "stop" in Chirstoph', () => {
    expect('Chirstoph').toMatch(/stop/);
  });
});

describe('array and repeatbale objects', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towel',
    'milk',
  ];

  test('the shopping list has milk on it', () => {
    expect(shoppingList).toContain('milk');
    // new Set() does make unique list.
    expect(new Set(shoppingList)).toContain('milk');
  });
});

describe('exception', () => {
  function compileAndroidCore() {
    throw new Error('you are using the wrong JDK');
  }

  test('compiling android goes as expected', () => {
    expect(() => compileAndroidCore()).toThrow('you are using the wrong JDK');
    expect(() => compileAndroidCore()).toThrow(/JDK/);
  });
});
