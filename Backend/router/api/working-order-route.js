const WorkingOrderController = require('../../app/controllers/api/working-order-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/working-order',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: WorkingOrderController.GetAll
        },
        {
            method: 'get',
            path: '/:wono',
            handler: WorkingOrderController.GetById
        },
    ]
}