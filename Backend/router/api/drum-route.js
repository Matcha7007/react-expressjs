const DrumController = require('../../app/controllers/api/drum-controller')
const { auth } = require('../../app/middleware/auth')


module.exports = {
    group: {
        prefix: '/drum',
        //middleware: [auth]
    },
    routes: [
        {
            method: 'get',
            path: '/',
            handler: DrumController.GetAll
        },
        {
            method: 'post',
            path: '/create',
            handler: DrumController.Create
        },
        {
            method: 'delete',
            path: '/delete/:uuid',
            handler: DrumController.Delete
        },
        {
            method: 'put',
            path: '/update/:uuid',
            handler: DrumController.Update
        }
    ]
}