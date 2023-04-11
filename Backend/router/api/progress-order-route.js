const ProgressOrderController = require('../../app/controllers/api/progress-order-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/grouping-result',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: ProgressOrderController.GetAll
        },
        {
            method: 'get',
            path: '/:uuid',
            handler: ProgressOrderController.GetByUUID
        },
        {
            method: 'post',
            path: '/create',
            handler: ProgressOrderController.Create
        },
        {
            method: 'delete',
            path: '/delete/:uuid',
            handler: ProgressOrderController.Delete
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: ProgressOrderController.Update
        }
    ]
}