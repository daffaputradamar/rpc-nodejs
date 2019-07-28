'use strict'

const db = require('./db')

const methods = {
    createUser: {
        description: 'creates a new user and returns the details of the new user',
        params: ['user: the user object'],
        returns: ['user'],
        exec(userObj) {
            return new Promise((resolve) => {
                if (typeof (userObj) !== 'object') {
                    throw new Error('was expecting an object')
                }
                // check required fields

                //attach id and save to db
                let _userObj = JSON.parse(JSON.stringify(userObj));
                _userObj.id = (Math.random() * 10000000) | 0
                resolve(db.users.save(userObj))
            })
        }
    },
    fetchUser: {
        description: `fetches the user of the given id`,
        params: ['id:the id of the user were looking for'],
        returns: ['user'],
        exec(userObj) {
            return new Promise((resolve) => {
                if (typeof (userObj) !== 'object') {
                    throw new Error('was expecting an object!');
                }
                // you would usually do some validations here
                // and check for required fields

                // fetch
                resolve(db.users.fetch(userObj.id) || {});
            });
        }
    },
    fetchAllUsers: {
        released: false,
        description: `fetches the entire list of users`,
        params: [],
        returns: ['userscollection'],
        exec() {
            return new Promise((resolve) => {
                // fetch
                resolve(db.users.fetchAll() || {});
            });
        }
    },
}

module.exports = methods;