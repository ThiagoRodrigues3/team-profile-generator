const Manager = require("../library/manager")
const manage = new Manager('foo', 'bar', '12', 'foo@bar.com', '1234')

// * First Name test
test('Return valid employee First name', () => {
    expect(manage.firstName).not.toBe('');
    expect(manage.firstName).toEqual('foo');
    expect(manage.firstName).toEqual(expect.any(String));
});
test('Return entered employee First name', () => {
    expect(manage.getFirstName()).toBe(manage.firstName);
});
// * Last Name test
test('Return valid employee Last name', () => {
    expect(manage.lastName).not.toBe('');
    expect(manage.lastName).toEqual('bar');
    expect(manage.lastName).toEqual(expect.any(String));
});
test('Return entered employee Last name', () => {
    expect(manage.getLastName()).toBe(manage.lastName);
});

// * ID Test
test('Return Manager ID', () => {
    expect(manage.id).toEqual(expect.any(String));
    expect(manage.id).toEqual('12');
});
test('Return inputted ID for Manager', () => {
    expect(manage.getId()).toBe('12');
});

// * Email Test
test('Return valid Manager email', () => {
    expect(manage.email).toEqual("foo@bar.com");
    expect(manage.email).toEqual(expect.any(String));
    expect(manage.email).toContain('@');
});

test('Return inputted Manager email', () => {
    expect(manage.getEmail()).toBe('foo@bar.com');
});

// * Number Test
test('Should return proper Manager school', () => {
    expect(manage.officeNum).toEqual(expect.any(String));
    expect(manage.officeNum).toEqual("1234");
});

test('Return Manager inputted office Number', () => {
    expect(manage.getOfficeNum()).toBe('1234');
});

//* Role Test
test('Return Manager role', () => {
    expect(manage.getRole()).toBe("Manager");
});