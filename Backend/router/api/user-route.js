const UserController = require('../../app/controllers/api/user-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/user',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: UserController.GetAll
        },
        {
            method: 'get',
            path: '/:uuid',
            handler: UserController.GetById
        },
        {
            method: 'post',
            path: '/create/',
            handler: UserController.Create
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: UserController.Update
        },
        {
            method: 'delete',
            path: '/delete/:uuid',
            handler: UserController.Delete
        },
    ]
}