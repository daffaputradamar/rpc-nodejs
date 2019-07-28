'use strict'

const types = {
    user: {
        description: 'the details of the user',
        props: {
            name: ['string', 'required'],
            age: ['number'],
            email: ['string', 'required'],
            password: ['string', 'required']
        }
    },
    task: {
        description: 's task entered by the user to do at a later time',
        props: {
            userId: ['number', 'required'],
            content: ['string', 'required'],
            expire: ['date', 'required']
        }
    }
}

module.exports = types