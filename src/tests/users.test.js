const config = require('../config');
// jest.mock('./__mocks__/db_mock');
// jest.mock('./__mocks__/users_mock');
const request = require('supertest');
const MongoClient = require('mongodb').MongoClient()

describe('gets users', () => {
    let req = {};
    let res = {json: (data) => {data}};
    beforeEach(() => {
    });
    it('should load users list', (done) => {
        MongoClient.connect(config.mongoURL, (err, db) => {
            if (err) throw err
            const users = require('../controllers/users.js');
            let usersData = users.list(req, res, db).then((data) => {
                console.log(data);
                done()
            });
            db.close();
            return;
        });
    });
});
