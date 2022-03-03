const Employee = require('../library/employee');
const e = new Employee("foo", '12', "foo@bar.com");

// * Name test
test('Return valid employee name', () => {
    expect(e.name).not.toBe('');
    expect(e.name).toEqual('foo');
    expect(e.name).toEqual(expect.any(String));
});
test('Return entered employee name', () => {
    expect(e.getName()).toBe(e.name);
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