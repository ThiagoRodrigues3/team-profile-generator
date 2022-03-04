const Engineer = require("../library/engineer");
const eng = new Engineer("foo","bar", "1234", "foo@bar.com", 'gitFoobar');

// * First Name test
test('Return valid employee first name', () => {
    expect(eng.firstName).not.toBe('');
    expect(eng.firstName).toEqual('foo');
    expect(eng.firstName).toEqual(expect.any(String));
});
test('Return entered employee first name', () => {
    expect(eng.getFirstName()).toBe(eng.firstName);
});
// * Last Name test
test('Return valid employee last name', () => {
    expect(eng.lastName).not.toBe('');
    expect(eng.lastName).toEqual('bar');
    expect(eng.lastName).toEqual(expect.any(String));
});
test('Return entered employee last name', () => {
    expect(eng.getLastName()).toBe(eng.lastName);
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
