const ProcessCodeController = require('../../app/controllers/api/process-code-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/process-code',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: ProcessCodeController.GetALl
        },
        {
            method: 'post',
            path: '/create',
            handler: ProcessCodeController.Create
        },
        {
            method: 'delete',
            path: '/delete/:uuid',
            handler: ProcessCodeController.Delete
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: ProcessCodeController.Update
        }
    ]
}