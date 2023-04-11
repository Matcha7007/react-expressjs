const SemiWipCodeController = require('../../app/controllers/api/semi-wip-code-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/semi-wip-code',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: SemiWipCodeController.GetAll
        },
        {
            method: 'post',
            path: '/create',
            handler: SemiWipCodeController.Create
        },
        {
            method: 'delete',
            path: '/delete/:uuid',
            handler: SemiWipCodeController.Delete
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: SemiWipCodeController.Update
        }
    ]
}