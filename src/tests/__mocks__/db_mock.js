const fs = require("fs");
const db = {};
const mockedDB = {};
const userList = [
  {
    _id: "user-0",
    _class: "digital.and.monolith.domain.User",
    login: "system",
    password: "$2a$10$mE.qmcV0mFU5NcKh73TZx.z4ueI/.bDWbj0T1BYyqP481kGGarKLG",
    first_name: "",
    last_name: "System",
    email: "system@localhost",
    activated: true,
    lang_key: "en",
    authorities: [
      {
        _id: "ROLE_USER"
      },
      {
        _id: "ROLE_ADMIN"
      }
    ],
    created_by: "system",
    created_date: "2017-11-14T09:58:23.999Z",
    last_modified_by: "system",
    last_modified_date: "2017-11-14T09:58:24.036Z"
  },
  {
    _id: "user-1",
    _class: "digital.and.monolith.domain.User",
    login: "anonymoususer",
    password: "$2a$10$j8S5d7Sr7.8VTOYNviDPOeWX8KcYILUVJBsYV83Y5NtECayypx9lO",
    first_name: "Anonymous",
    last_name: "User",
    email: "anonymous@localhost",
    activated: true,
    lang_key: "en",
    authorities: [],
    created_by: "system",
    created_date: "2017-11-14T09:58:24.106Z",
    last_modified_by: "system",
    last_modified_date: "2017-11-14T09:58:24.108Z"
  },
  {
    _id: "user-2",
    _class: "digital.and.monolith.domain.User",
    login: "admin",
    password: "$2a$10$gSAhZrxMllrbgj/kkK9UceBPpChGWJA7SYIb1Mqo.n5aNLq1/oRrC",
    first_name: "admin",
    last_name: "Administrator",
    email: "admin@localhost",
    activated: true,
    lang_key: "en",
    authorities: [
      {
        _id: "ROLE_USER"
      },
      {
        _id: "ROLE_ADMIN"
      }
    ],
    created_by: "system",
    created_date: "2017-11-14T09:58:24.114Z",
    last_modified_by: "system",
    last_modified_date: "2017-11-14T09:58:24.116Z"
  },
  {
    _id: "user-3",
    _class: "digital.and.monolith.domain.User",
    login: "user",
    password: "$2a$10$VEjxo0jq2YG9Rbk2HmX9S.k1uZBGYUHdUcid3g/vfiEl7lwWgOH/K",
    first_name: "",
    last_name: "User",
    email: "user@localhost",
    activated: true,
    lang_key: "en",
    authorities: [
      {
        _id: "ROLE_USER"
      }
    ],
    created_by: "system",
    created_date: "2017-11-14T09:58:24.120Z",
    last_modified_by: "system",
    last_modified_date: "2017-11-14T09:58:24.121Z"
  }
];

mockedDB.collection = jest.fn(connection => {
  return {
    find: () => {
      return {
        toArray: callback => {
          switch (connection) {
            case "users":
              callback(null, userList);
              break;
            default:
              return null;
          }
        }
      };
    }
  };
});

module.exports = mockedDB;
