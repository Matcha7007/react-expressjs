const EmployeeController = require('../../app/controllers/api/employee-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/employee',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: EmployeeController.GetAll
        },
        {
            method: 'get',
            path: '/:uuid',
            handler: EmployeeController.GetById
        },
        {
            method: 'post',
            path: '/create/',
            handler: EmployeeController.Create
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: EmployeeController.Update
        },
        {
            method: 'delete',
            path: '/delete/:uuid',
            handler: EmployeeController.Delete
        },
    ]
}