const Employee = require('../library/employee');
const e = new Employee("foo","bar", '12', "foo@bar.com");

// * First Name test
test('Return valid employee First name', () => {
    expect(e.firstName).not.toBe('');
    expect(e.firstName).toEqual('foo');
    expect(e.firstName).toEqual(expect.any(String));
});
test('Return entered employee First name', () => {
    expect(e.getFirstName()).toBe(e.firstName);
});
// * Last Name test
test('Return valid employee Last name', () => {
    expect(e.lastName).not.toBe('');
    expect(e.lastName).toEqual('bar');
    expect(e.lastName).toEqual(expect.any(String));
});
test('Return entered employee Last name', () => {
    expect(e.getLastName()).toBe(e.lastName);
});

// * ID Test
test('Return employee ID', () => {
    expect(e.id).toEqual(expect.any(String));
    expect(e.id).toEqual('12');
});

test('return entered employee ID', () => {
    expect(e.getId()).toBe(e.id);
});

// * Email Test
test('Return a valid email', () => {
    expect(e.email).toEqual("foo@bar.com");
    expect(e.email).toEqual(expect.any(String));
    expect(e.email).toContain('@');
});
test('Return entered employee email', () => {
    expect(e.getEmail()).toBe(e.email);
});

// * Role Test
test('Return employee role', () => {
    expect(e.getRole()).toBe("Employee");

});