const Manager = require("../library/manager")
const manage = new Manager('foo', '12', 'foo@bar.com', '1234')

// * Name Test
test('Return valid Manager name', () => {
    expect(manage.name).toEqual('foo');
    expect(manage.name).not.toBe('');
    expect(manage.name).toEqual(expect.any(String));
});
test('Return Manager name', () => {
    expect(manage.getName()).toBe('foo');
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