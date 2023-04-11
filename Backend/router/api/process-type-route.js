const ProcessTypeController = require('../../app/controllers/api/proccess-type-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/process-type',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: ProcessTypeController.GetAll
        },
    ]
}