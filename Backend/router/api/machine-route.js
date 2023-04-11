const MachineController = require('../../app/controllers/api/machine-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/machine',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '',
            handler: MachineController.GetAall
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: MachineController.Update
        },
        {
            method: 'post',
            path: '/create/',
            handler: MachineController.Create
        }
    ]
}