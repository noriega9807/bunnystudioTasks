const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task')
const {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create a Task', async () => {
    const response = await request(app)
        .post('/tasks')
        .send({
            description: 'Fourth task',
            user_id: userOneId._id
        })
        .expect(201)
    const task = await Task.findById(response.body._id)
    expect(task).not.toBeNull()
})

test('Should fetch task', async () => {
    const response = await request(app)
        .get(`/tasks/${taskOne._id}`)
        .send()
        .expect(200)
    expect(response.body.description).toEqual("First task")
    expect(response.body.state).toEqual("to do")
})

test('Should update task', async () => {
    await request(app)
        .patch(`/tasks/${taskTwo._id}`)
        .send({
            description: 'Changed task',
            state: "to do"
        })
        .expect(200)
    const task = await Task.findById(taskTwo._id)
    expect(task.description).not.toEqual(taskTwo.description)
    expect(task.state).not.toEqual(taskTwo.state)
})

test('Should delete task', async () => {
    const response = await request(app)
        .delete(`/tasks/${taskThree._id}`)
        .send()
        .expect(200)
    const task = await Task.findById(taskThree._id)
    expect(task).toBeNull()
})

test('Should delete all tasks for user', async () => {
    const response = await request(app)
        .delete(`/tasks/remove/allUser/${userOneId._id}`)
        .send()
        .expect(200)
    const tasks = await Task.find({user_id: userOneId._id})
    expect(tasks).toEqual([])
})

test('Should get all user tasks', async () => {
    const response = await request(app)
        .get(`/tasks/user/${userOneId._id}`)
        .send()
        .expect(200)
    expect(response.body.length).toEqual(2)
})
