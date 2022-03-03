const Intern = require("../library/intern");
const int = new Intern("foo", '12', "foo@bar.com", "UCF");

// * Name Test
test('Return valid intern name', () => {
    expect(int.name).toEqual('foo');
    expect(int.name).not.toBe('');
    expect(int.name).toEqual(expect.any(String));
});
test('Return intern name', () => {
    expect(int.getName()).toBe('foo');
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