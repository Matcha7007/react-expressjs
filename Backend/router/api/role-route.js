const RoleController = require('../../app/controllers/api/role-controller')
const { auth } = require('../../app/middleware/auth')

module.exports = {
    group: {
        prefix: '/role',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: RoleController.GetAll
        },
        {
            method: 'get',
            path: '/:uuid',
            handler: RoleController.GetById
        },
        {
            method: 'post',
            path: '/create/',
            handler: RoleController.Create
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: RoleController.Update
        },
        {
            method: 'delete',
            path: '/delete/:uuid',
            handler: RoleController.Delete
        },
    ]
}