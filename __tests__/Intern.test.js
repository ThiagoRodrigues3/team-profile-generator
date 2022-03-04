const Intern = require("../library/intern");
const int = new Intern("foo", "bar", '12', "foo@bar.com", "UCF");

// * First Name test
test('Return valid employee First name', () => {
    expect(int.firstName).not.toBe('');
    expect(int.firstName).toEqual('foo');
    expect(int.firstName).toEqual(expect.any(String));
});
test('Return entered employee name', () => {
    expect(int.getFirstName()).toBe(int.firstName);
});
// * Last Name test
test('Return valid employee Last name', () => {
    expect(int.lastName).not.toBe('');
    expect(int.lastName).toEqual('bar');
    expect(int.lastName).toEqual(expect.any(String));
});
test('Return entered employee name', () => {
    expect(int.getLastName()).toBe(int.lastName);
});
// * ID Test
test('Return intern ID', () => {
    expect(int.id).toEqual(expect.any(String));
    expect(int.id).toEqual('12');
});
test('Return inputted ID for intern', () => {
    expect(int.getId()).toBe('12');
});

// * Email Test
test('Return valid intern email', () => {
    expect(int.email).toEqual("foo@bar.com");
    expect(int.email).toEqual(expect.any(String));
    expect(int.email).toContain('@');
});
test('Return inputted intern email', () => {
    expect(int.getEmail()).toBe('foo@bar.com');
});

// * School Test
test('Should return proper intern school', () => {
    expect(int.school).toEqual(expect.any(String));
    expect(int.school).toEqual("UCF");
});
test('Return intern inputted school', () => {
    expect(int.getSchool()).toBe('UCF');
});

//* Role Test
test('Return intern role', () => {
expect(int.getRole()).toBe("Intern");
});