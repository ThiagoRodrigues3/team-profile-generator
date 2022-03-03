const Engineer = require("../library/engineer");
const eng = new Engineer("foo", "1234", "foo@bar.com", 'gitFoobar');

// * Name Test
test('Return valid engineer name', () => {
    expect(eng.name).not.toBe('');
    expect(eng.name).toEqual(expect.any(String));
    expect(eng.name).toEqual('foo');
});
test('Return engineer name', () => {
    expect(eng.getName()).toBe(eng.name);
});

// * ID Test
test('Return engineer ID', () => {
    expect(eng.id).toEqual(expect.any(String));
    expect(eng.id).toEqual('1234');
});
test('Return engineer ID', () => {
    expect(eng.getId()).toBe(eng.id);
});

// * Email Test
test('Return valid email for engineer', () => {
    expect(eng.email).toEqual("foo@bar.com");
    expect(eng.email).toEqual(expect.any(String));
    expect(eng.email).toContain('@');
});
test('Return engineer email', () => {
    expect(eng.getEmail()).toBe(eng.email);
});

// * Github test
test('Return valid github information', () => {
    expect(eng.github).toEqual(expect.any(String));
    expect(eng.github).toEqual("gitFoobar");
});
test('Return github handle', () => {
    expect(eng.getGithub()).toBe(eng.github);
});

// * Role test
test('Return engineer role', () => {
    expect(eng.getRole()).toBe("Engineer");
});
