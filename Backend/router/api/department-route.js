const DepartmentController = require('../../app/controllers/api/department-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/department',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: DepartmentController.GetAll
        },
        {
            method: 'post',
            path: '/create/',
            handler: DepartmentController.Create
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: DepartmentController.Update
        },
        {
            method: 'delete',
            path: '/delete/:uuid',
            handler: DepartmentController.Delete
        },
    ]
}