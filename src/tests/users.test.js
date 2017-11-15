const mockedDB = require("./__mocks__/db_mock");
const users = require("../controllers/users.js");

jest.mock("../models/db", () => {
  return { dbConnection: () => mockedDB };
});

describe("gets users", () => {
  let req = {};
  let res = {
    json: data => {
      data;
    }
  };

  beforeEach(() => {});
  it("should load users list", done => {
    let usersData = users.list(req, res);

    expect(mockedDB.collection.mock.calls.length).toBe(1);
    done();
  });
});
