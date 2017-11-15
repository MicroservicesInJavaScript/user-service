const config = require("../config");
const mockedDB = require("./__mocks__/db_mock");

const users = require("../controllers/users.js");

describe("gets users", () => {
  let req = {};
  let res = {
    json: data => {
      data;
    }
  };

  beforeEach(() => {});
  it("should load users list", done => {
    let usersData = users.list(req, res, mockedDB);

    expect(mockedDB.collection.mock.calls.length).toBe(1);
    done();
  });
});
