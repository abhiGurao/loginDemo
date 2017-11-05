import { login, password, username } from '../index';

jest.unmock('../index');

const value = false;

describe('should have a type of "LOGIN"', () => {
  it('should ', () => {
    expect(login().type).toEqual(LOGIN);
  });
});

describe('should pass on the value we pass in', () => {
  it('should ', () => {
    expect(login(value).payload.value).toEqual(value);
  });
});

describe('should have a type of "password"', () => {
  it('should ', () => {
    expect(password().type).toEqual(PASSWORD);
  });
});

describe('should pass on the value we pass in', () => {
  it('should', () => {
    expect(password(value).payload.value).toEqual(value);
  });
});
describe('should have a type of "username"', () => {
  it('should ', () => {
    expect(username().type).toEqual(USERNAME);
  });
});

describe('should pass on the value we pass in', () => {
  it('should', () => {
    expect(username(value).payload.value).toEqual(value);
  });
});
