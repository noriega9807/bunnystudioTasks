const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    setupDatabase
} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create an user', async () => {
    const response = await request(app)
        .post('/users')
        .send({
            name: 'Jane'
        })
        .expect(201)
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()
})

test('Should fetch user', async () => {
    const response = await request(app)
        .get(`/user/${userOneId._id}`)
        .send()
        .expect(200)
    expect(response.body.name).toEqual("Erick")
})

test('Should update user', async () => {
    const response = await request(app)
        .patch(`/user/${userTwoId._id}`)
        .send({
            name: 'Bill'
        })
        .expect(200)
    const user = await User.findById(userTwoId._id)
    expect(user.name).not.toEqual(userTwo.name)
})

test('Should delete user', async () => {
    const response = await request(app)
        .delete(`/user/${userTwoId._id}`)
        .send()
        .expect(200)
    const user = await User.findById(userTwoId._id)
    expect(user).toBeNull()
})

test('Should get all users', async () => {
    const response = await request(app)
        .get(`/users/all`)
        .send()
        .expect(200)
    expect(response.body.length).toEqual(2)
})
